
export default function PartOne(){

    return (
        <section className="
            h-[680px] w-full bg-center dark:bg-gradient-to-t dark:from-[#434343] dark:to-black bg-gradient-to-t from-[#fad0c4] to-[#ffd1ff]">
            {/* <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/source/video1.mp4"
                autoPlay={true}
                loop={true}
                muted
                playsInline
            /> */}
            <div className="absolute z-5 hidden xl:block h-screen w-full flex flex-row">
                {/* <div className="w-[50%] h-full flex justify-end items-end pb-20 pr-20">
                    <div className="w-6/12 h-2/4 bg-yellow-500/20 blur-3xl" style={{borderRadius: "58% 25% 44% 31% / 29% 31% 51% 60%"}}>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <div className="h-[70%] w-[50%] bg-blue-500/30 blur-3xl" style={{borderRadius: "58% 25% 70% 19% / 40% 0% 76% 44%"}}/>
                    <div className="h-[30%] w-full flex justify-end">
                        <div className="h-full w-[50%] rounded-tl-[190px] bg-yellow-500/30 blur-3xl" />
                    </div>
                </div> */}
                {/* <div className="absolute flex z-10 w-[45%] h-[90%] bg-transparent top-[30px] left-[700px] border-black dark:border-white border-2" 
                style={{borderRadius: '58% 25% 70% 30% / 53% 31% 69% 40%'}}
                >
                </div>
                <div className="absolute flex z-10 w-[30%] h-[70%] bg-orange-400 top-[100px] left-[800px]" 
                style={{borderRadius: '30% 50% 47% 42% / 53% 31% 69% 40%'}}
                >
                </div>
                <div className="absolute flex z-10 w-[30%] h-[70%] grayscale bg-cover bg-center bg-[url('/source/profil.jpg')] top-[100px] left-[800px]" 
                style={{borderRadius: '51% 28% 76% 10% / 53% 12% 81% 40%'}}
                >
                </div> */}
            </div>
            <div className="relative z-8 flex items-center max-md:justify-center max-md:items-end h-full bg-yellow-500">
                <div className="dark:text-white text-gray-800 min-w-[320px] w-[550px] h-4/6 md:border-l-transparent dark:border-r-white border-r-gray-800 dark:border-t-white border-t-gray-800 dark:border-b-white border-b-gray-800 border-2">
                    <div className="h-4/5 p-10">
                        <span>A Professional Software Engineer</span>
                        <h3 className="text-4xl md:text-6xl font-bold">
                            MUHAMMAD
                        </h3>
                        <h5 className="text-2xl md:text-4xl">
                            YUSTANZAH
                        </h5>
                        <h6 className="text-3xl md:text-5xl">
                            QURNIAWAN
                        </h6>
                        <div className="md:w-full h-auto flex justify-center p-5">
                            <div className="w-[50%] h-[50px] rounded-[40px] flex justify-center items-center text-center border-2 dark:border-white border-black">
                                <span className="text-xs md:text-xl align-middle">Web Developer</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/5 flex flex-row item-center">
                        <p className="pl-10">PORTFOLIO</p>    
                        <div className="w-[30%] h-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}