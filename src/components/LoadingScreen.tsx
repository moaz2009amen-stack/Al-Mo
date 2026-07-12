import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function LoadingScreen({ visible }: { visible: boolean }) {
  const { t } = useLanguage()

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="blueprint-bg absolute inset-0 opacity-40" />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-4"
          >
            <span className="font-mono-label text-xs text-brass">AL&nbsp;—&nbsp;MO</span>
            <div className="h-px w-24 bg-line-dark">
              <motion.div
                className="h-full bg-brass"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-sm text-paper/60">{t.loading.line2}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
