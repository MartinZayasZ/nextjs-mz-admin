import Image from "next/image"
import { FaLock, FaLockOpen } from "react-icons/fa";

export default function LoginLayout(){
    return <html>
    <head></head>
    <body className="bg-slate-300">
        <div className="container mx-auto">
            <div className="mt-8 flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-neutral-100 p-5 rounded-lg hover:shadow-xl text-gray-900">
                    <div>
                        <Image
                            className="mx-auto h-12 w-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"
                            alt="Your Company"
                            width={200}
                            height={200}
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                            Sign in to your account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="email-address" className="sr-only">
                                    Usuario
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autocomplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                    autoFocus
                                />
                            </div>
                            <div>
                                <label for="password" className="sr-only">
                                    Contrase??a
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                    for="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:text-black"
                                >
                                    ??Olvidaste la contrase??a?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute py-1 left-3">
                                    <FaLock className="text-white group-hover:hidden" />
                                    <FaLockOpen className="text-white hidden group-hover:block" />
                                </span>
                                Acceder
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
  </html>
  
}