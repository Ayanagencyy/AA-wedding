import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
export default function MainText() {
    return (
        <>
            <div className="flex flex-col items-center mt-6 relative">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="medFlowA w-[414px] h-[630px] absolute -bottom-34 -left-60 z-40 rotate-24 scale-x-[-1]"
                >
                    <Image src={"/pinkFlow.png"} alt="" fill className="object-contain" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="medFlowB w-[546px] h-[832px] absolute top-20 -right-90 -rotate-14 scale-x-[-1]"
                >
                    <Image src={"/pinkFlow.png"} alt="" fill className="object-contain" />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1.2 }}
                    className="medMainText font-bidena text-[130px] tracking-[2%]  text-[#3D521E]"
                >
                    Artur
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="medMainText font-signature text-[130px]  text-[#3D521E]/70"
                >
                    &
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    className="medMainText font-bidena text-[130px] tracking-[2%] text-[#3D521E]"
                >
                    Ani
                    {/* Ru<span className="mdfontwrd font-adine text-[300px] leading-10 ">z</span>anna */}
                </motion.p>
            </div>
        </>
    )
}
