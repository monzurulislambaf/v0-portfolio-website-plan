"use client"

import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaDatabase,
  FaCloud,
  FaCode,
  FaMobile,
  FaPalette,
  FaRocket
} from "react-icons/fa"
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiGraphql,
  SiRedis,
  SiWebpack,
  SiFigma,
  SiLinux
} from "react-icons/si"

const icons = [
  { Icon: FaReact, color: "#61DAFB", size: 40 },
  { Icon: SiTypescript, color: "#3178C6", size: 35 },
  { Icon: SiNextdotjs, color: "#000000", size: 40 },
  { Icon: FaNodeJs, color: "#339933", size: 45 },
  { Icon: SiTailwindcss, color: "#06B6D4", size: 38 },
  { Icon: FaGitAlt, color: "#F05032", size: 42 },
  { Icon: SiMongodb, color: "#47A248", size: 40 },
  { Icon: SiPostgresql, color: "#336791", size: 36 },
  { Icon: FaDocker, color: "#2496ED", size: 44 },
  { Icon: FaAws, color: "#FF9900", size: 41 },
  { Icon: SiPrisma, color: "#2D3748", size: 37 },
  { Icon: SiVercel, color: "#000000", size: 39 },
  { Icon: FaPython, color: "#3776AB", size: 43 },
  { Icon: SiGraphql, color: "#E10098", size: 38 },
  { Icon: FaDatabase, color: "#336791", size: 42 },
  { Icon: FaCloud, color: "#4285F4", size: 40 },
  { Icon: SiRedis, color: "#DC382D", size: 36 },
  { Icon: FaCode, color: "#007ACC", size: 41 },
  { Icon: FaMobile, color: "#A4C639", size: 39 },
  { Icon: FaPalette, color: "#FF6B6B", size: 37 },
  { Icon: FaRocket, color: "#FF6B35", size: 43 },
  { Icon: SiWebpack, color: "#8DD6F9", size: 38 },
  { Icon: SiFigma, color: "#F24E1E", size: 40 },
  { Icon: SiLinux, color: "#FCC624", size: 42 },
]

interface FloatingIcon {
  id: number
  Icon: any
  color: string
  size: number
  x: number
  y: number
  duration: number
  delay: number
}

export function FloatingIcons() {
  const floatingIcons: FloatingIcon[] = icons.map((icon, index) => ({
    id: index,
    ...icon,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute opacity-10 dark:opacity-20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: icon.duration,
