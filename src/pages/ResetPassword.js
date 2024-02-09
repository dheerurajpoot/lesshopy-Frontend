import React from 'react'
import MetaTitle from '../components/MetaTitle'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <MetaTitle title ={"Reset your account password"}/>
      <section class="bg-[#f1f2f4]">
        <div class="flex flex-col items-center justify-center my-20">
            <Link class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img class="w-64 mr-2" src="images/lesshopylogo.png" alt="logo"/>  
            </Link>
            <div class="w-full bg-white rounded-lg shadowr md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Reset Your Password</h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Confirm New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        </div>
                        <button type="submit" class="w-full text-white bg-[#FF504E] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
