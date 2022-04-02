import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import Head from 'next/head'

function NFTDropPage() {
  //auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  // console.log('address', address)

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10 ">
      <Head>
        <title>NFT-DROP CHALLENGE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-500 p-1">
            <img
              src="https://links.papareact.com/8sg"
              alt="hero img"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">GERV Apes</h1>
            <h2 className="text-xl text-gray-300">
              A collection of Gerv Apes who live and breath React!!
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between ">
          {/* Header */}
          <h1 className="w-52 cursor-pointer  text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              SIR GERV
            </span>{' '}
            NFT Market Place
          </h1>
          <button
            className="rounded-full bg-rose-400 py-2 px-4 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            onClick={() => {
              address ? disconnect() : connectWithMetamask()
            }}
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address ? (
          <p className="text-center text-sm text-rose-400">
            You are signed in as
            {
              <span className="font-extrabold">
                {' '}
                {address.substring(0, 5)}...
                {address.substring(address.length - 5, address.length)}
              </span>
            }
          </p>
        ) : (
          <p>You are not signed in. Please sign in to continue.</p>
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center  lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt="home"
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The GERV Ape Coding Club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13/12 NFT's Claimed</p>
        </div>
        {/* Mint button */}
        <button className="mt-10 h-16 w-full rounded-full bg-red-500 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
