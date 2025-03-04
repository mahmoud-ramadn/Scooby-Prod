
function Drawer({handleToggle ,toggle,drawerWidth}) {
  
    return (
        <>{toggle && (
                <div className="absolute w-full flex justify-end min-h-screen z-20 bg-gray-custom/20">
                    <div
                        className={`${drawerWidth} transition-all duration-300 ease-linear h-[100vh] bg-primary-50`}
                    >
                        <button
                        
                            onClick={handleToggle}
                            className=" bg-black w-7 h-7 flex items-center justify-center rounded-full p-8 text-xl font-bold"
                        >
                            x
                        </button>
                    </div>
                </div>
                   )
            }
        </>
    );
}

export default Drawer;