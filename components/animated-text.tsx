"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05
}: AnimatedTextProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        velocity: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} inline-block`}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-3 hover:text-primary transition-colors duration-300"
          style={{
            display: "inline-block",
            marginRight: "0.75em",
          }}
          whileHover={{
            scale: 1.1,
            color: "var(--primary)",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
