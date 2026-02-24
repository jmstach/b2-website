import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Loader2 } from 'lucide-react';

type Variant = 'hero' | 'inline' | 'footer';
type Status = 'idle' | 'loading' | 'success' | 'error' | 'rate_limited';

interface EmailCaptureFormProps {
  variant: Variant;
  source: string;
  onSuccess?: () => void;
  buttonText?: string;
}

const successMessages: Record<string, string> = {
  hero_mobile: "Check your inbox!",
  hero_mobile_list: "You're on the list!",
  deepdive_mobile: "Check your inbox!",
  deepdive_mobile_list: "You're on the list!",
  deepdive_desktop_list: "You're on the list!",
  footer_list: "You're on the list!",
};

export function EmailCaptureForm({ variant, source, onSuccess, buttonText }: EmailCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [rateLimitMsg, setRateLimitMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      if (res.status === 429) {
        const data = await res.json();
        setRateLimitMsg(data.error);
        setStatus('rate_limited');
        return;
      }
      if (!res.ok) throw new Error();
      setStatus('success');
      onSuccess?.();
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isHero = variant === 'hero';
  const isInline = variant === 'inline';
  const isFooter = variant === 'footer';

  return (
    <div className="w-full max-w-sm mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' || status === 'rate_limited' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={`flex items-center justify-center gap-2 py-3 ${
              isHero ? 'text-gray-900' : 'text-white'
            }`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Check size={20} className={isHero ? 'text-green-600' : 'text-green-400'} />
            </motion.div>
            <span className="text-sm font-medium">
              {status === 'rate_limited'
                ? rateLimitMsg
                : successMessages[source] || "You're on the list!"}
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className={`flex items-center rounded-full overflow-hidden transition-all ${
              isHero
                ? 'bg-white border border-gray-200 shadow-lg shadow-black/5'
                : isInline
                  ? 'bg-white/10 border border-white/10'
                  : 'bg-white/5 border border-white/10'
            }`}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={`flex-1 min-w-0 bg-transparent px-5 py-3 text-sm outline-none placeholder:opacity-50 ${
                isHero
                  ? 'text-gray-900 placeholder:text-gray-400'
                  : 'text-white placeholder:text-white/40'
              }`}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`flex-none px-5 py-3 text-sm font-medium transition-all ${
                isHero
                  ? 'bg-[#0071e3] hover:bg-[#0077ED] text-white'
                  : isInline
                    ? 'bg-white/20 hover:bg-white/30 text-white'
                    : 'bg-white/10 hover:bg-white/15 text-white/80'
              }`}
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : status === 'error' ? (
                'Retry'
              ) : buttonText ? (
                buttonText
              ) : isHero ? (
                'Send link'
              ) : (
                'Subscribe'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
