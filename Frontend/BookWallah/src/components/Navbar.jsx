import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../data/NavbarLinks"

export const Navbar = () => {

    const location =useLocation();
    function matchRoute(route){
        return matchPath(route,location.pathname)
    }

    return (
        <div className='flex h-14 items-center justify-center  bg-indigo-100'>

            <div className='flex items-center justify-center w-11/12 max-w-maxContent'>
                {/* <Link to={'/'}>
                    
                     <p>BookWallah</p>
                </Link> */}
                <nav >
                    <ul className='flex flex-row gap-x-6 text-black font-semibold text-xl font-mono'>
                        {
                            NavbarLinks.map((link, index) => (

                                <li key={index}>
                                    {
                                        link.title === "Catalog" ? (
                                            <div className='group relative flex items-center gap-2 '>
                                                {/* <p>{link.title}</p>
                                            <IoIosArrowDropdownCircle/> 
                                            <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>
                                                
                                                {
                                                    subLinks.length >0 ?
                                                    subLinks.map((subLink,index)=>(
                                                        <Link to={`/catalog/${subLink.name
                                                            .split(" ")
                                                            .join("-")
                                                            .toLowerCase()}`}>
                                                            <div className='rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50'>{subLink.name}</div>
                                                        </Link>
                                                        
                                                    ))
                                                    :(<div></div>)
                                                }
                                           
                                            <div className='absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded-md bg-richblack-5 '>

                                            </div>
                                            </div> */}

                                            </div>) : (
                                            <Link to={link?.path}>
                                                <p className={`${matchRoute(link?.path) ? "text-indigo-500" : "text-richblack-100"}`}>
                                                    {link.title}
                                                </p>

                                            </Link>

                                        )
                                    }
                                </li>
                            ))

                        }

                    </ul>
                </nav>
                {/* login and signupp */}
                {/* <div className="hidden items-center gap-x-4 md:flex">
                    {/* {
                        user && user?.accountType !== "Instructor" && (
                            <Link to={'/dashboard/cart'} className='relative text-white flex'>
                                <AiOutlineShopping className='text-3xl' />
                                {
                                    totalItems > 0 && (
                                        <span className='absolute text-[12px] -right-2 text-center bg-white rounded-full w-5 text-richblack-900'>{totalItems}</span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token == null && (
                            <Link className='border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md' to={'/login'}>
                                <button>Log in</button>

                            </Link>
                        )
                    }
                    {
                        token == null && (
                            <Link className='border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md' to={'/signup'}>
                                <button>Signup</button>

                            </Link>
                        )
                    }
                    {

                        token !== null && (<ProfileDropDown />)
                    } 

                </div> */}
            </div>
        </div>
    )
}

