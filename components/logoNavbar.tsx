import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function LogoNavbar() {
    return (
        <>
            <motion.div
                // initial={{ opacity: 0, y: -40 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center"
            >
                <div className="medLogo relative w-98 h-107">
                    {/* <Image src="/logo.png" alt="" fill className="object-contain" /> */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="medFlowC w-[448px] h-[682px] absolute -top-34 -left-80 z-40 rotate-48"
                    >
                        <Image src={"/pinkFlow.png"} alt="" fill className="object-contain" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="medFlowD w-[448px] h-[682px] absolute -top-38 -right-80 -rotate-48 scale-x-[-1]"
                    >
                        <Image src={"/pinkFlow.png"} alt="" fill className="object-contain" />
                    </motion.div>

                    <motion.div

                        className=" sm:w-[254px] sm:h-[212px] w-[156px] h-[132px]  medTrchun1 absolute top-70 -left-34"
                    >
                        <Image
                            src="/trchun1.svg"
                            alt=""
                            fill
                        />
                    </motion.div>


                    <motion.div

                        className="w-[204px] h-[173px] medTrchun2 absolute -bottom-20 sm:-bottom-30 -right-40"
                    >
                        <Image
                            src="/trchun2.svg"
                            alt=""
                            fill
                        />
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}
