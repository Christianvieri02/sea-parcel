import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#150f26] text-[#E0E2E6] font-sans flex flex-col relative overflow-x-hidden selection:bg-[#00F0FF] selection:text-black">
      
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00F0FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[30%] h-[30%] bg-[#00F0FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <nav className="flex items-center justify-between px-6 lg:px-10 py-6 max-w-[1440px] mx-auto w-full z-10">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded shadow-[0_0_15px_rgba(165,39,188.1)] bg-[]">
             <img 
               src="profile/icon.png"
               alt="Sea Parcel Logo" 
               className="w-full h-full object-contain rounded" 
             />
          </div>
          <span className="text-xl font-bold tracking-wide text-[#A527BC]">
            Sea <span className="text-white">Parcel</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-xs font-semibold tracking-widest text-[#8F9BA8]">
          <Link href="#" className="hover:text-white transition-colors uppercase">Solutions</Link>

          <Link href="#" className="hover:text-white transition-colors uppercase">Logistics</Link>
          <Link href="#" className="hover:text-white transition-colors uppercase">Analytics</Link>
          <Link href="#" className="hover:text-white transition-colors uppercase">Global Fleet</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/profile" className="text-xs font-bold tracking-widest text-[#8F9BA8] hover:text-white transition-colors uppercase">
            Log In
          </Link>
          <Link href="/profile" className="text-xs font-bold tracking-widest bg-[#A527BC] text-black px-6 py-2.5 rounded-md hover:bg-[#C65BCF] transition-all uppercase shadow-[0_0_15px_rgba(165,39,188,1)] hover:shadow-[0_0_25px_rgba(165,39,188,1)]">
            Get Started
          </Link>
          
        </div>
      </nav>


      <main className="flex-1 flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto w-full px-6 lg:px-10 py-12 gap-16 lg:gap-8 relative z-10">
        
        <div className="flex-1 flex flex-col w-full max-w-[550px]">
          
          <div className="bg-[#1F172F] rounded-2xl p-10 lg:p-12 shadow-2xl relative mb-5">
            <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[#00F0FF]/5 blur-[70px] pointer-events-none rounded-tl-2xl"></div>
            
            <h1 className="text-[48px] lg:text-[56px] font-bold leading-[1.1] mb-6 text-white tracking-tight">
              Welcome to <span className="text-[#A527BC]">Sea</span> <br />
              <span className="text-[#A527BC]">Parcel.</span>
            </h1>
            
            <p className="text-[#9BA4B5] text-[16px] leading-relaxed mb-10 max-w-[420px]">
              A simple website for reliable sea freight shipping, allowing users to book shipments, check rates, and track deliveries easily.
            </p>
            
            <Link
              href="/profile"
              className="inline-flex items-center gap-3 bg-[#A527BC] text-[#0A0710] px-6 py-2.5 rounded-lg font-bold text-[14px] hover:bg-[#D910FE] transition-all"
            >
              Log in <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1 bg-[#39314A] rounded-xl p-6 shadow-xl relative group">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3.5 h-3.5 text-[#F5C24D]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] font-bold tracking-widest text-[#F5C24D] uppercase">Ultra-Speed</span>
              </div>
              <div className="text-[32px] font-bold mb-1 text-white leading-none">32ms</div>
              <div className="text-[10px] uppercase tracking-wider text-[#9BA4B5] font-medium mt-2">Global Latency</div>
            </div>

            <div className="flex-1 bg-[#39314A] rounded-xl p-6 shadow-xl relative group">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3.5 h-3.5 text-[#A527BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <span className="text-[10px] font-bold tracking-widest text-[#A527BC] uppercase">Network</span>
              </div>
              <div className="text-[32px] font-bold mb-1 text-white leading-none">142</div>
              <div className="text-[10px] uppercase tracking-wider text-[#9BA4B5] font-medium mt-2">Ports Connected</div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[650px] relative hidden lg:flex items-center justify-center lg:ml-10 mt-6 lg:mt-0">
          
          <img 
            src="/profile/background.png" 
            alt="Dashboard Layout" 
            className="w-full h-auto object-contain drop-shadow-2xl" 
          />

          <div className="absolute top-[17%] right-[-7%] w-[100%] max-w-[500px] bg-[#1F172F] rounded-2xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] border border-white/[0.03] p-10 pb-9 z-20">
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-[13px] font-semibold text-[#A527BC] uppercase tracking-[0.15em]">
                Invoice #SP-2024-001
              </span>
              <span className="bg-[#A527BC] text-[#0A0710] text-[11px] font-bold px-3 py-1.5 rounded-[4px] uppercase tracking-widest">
                Paid
              </span>
            </div>
            
            <h3 className="text-[28px] font-bold text-[#EADDFE] mb-10 tracking-wide">
              Ocean Freight - Atlantic
            </h3>
            
            <div className="space-y-[24px] text-[16px] text-[#A3B0BF] mb-12">
              <div className="flex justify-between items-center">
                <span>Logistics Fee</span>
                <span className="text-white font-medium">$1,240.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Port Handling</span>
                <span className="text-white font-medium">$450.00</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-8 border-t border-white/[0.06]">
              <span className="text-white text-[16px] font-bold tracking-widest uppercase">Total</span>
              <span className="text-[#A527BC] font-bold text-[24px] tracking-wide">$1,690.00</span>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#4ade80] via-[#fde047] to-[#22d3ee] rounded-b-2xl"></div>
          </div>
          
          <div className="absolute bottom-[-30px] left-[-35px] bg-[#231C2D] border border-white/[0.03] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-[18px] pl-[22px] pr-[30px] flex items-center gap-5 z-30">
            <div className="relative flex h-3.5 w-3.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-[#A527BC] opacity-[0.25]"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#A527BC]"></span>
            </div>
            
            <div>
              <div className="text-[11px] font-bold text-[#A527BC] uppercase tracking-[0.18em] mb-1.5">Live Signal</div>
              <div className="text-[15px] font-medium text-[#EADDFE]">Ship "Aurora" Mid-Atlantic</div>
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-white/[0.04] mt-auto relative z-10 w-full bg-[#100a1f]">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1.5 items-center md:items-start">
            <span className="text-[#A527BC] font-bold text-lg tracking-wide">Sea Parcel</span>
            <span className="text-[13px] text-[#5A6573] font-medium">© 2024 Sea Parcel. Navigating the Midnight Abyss.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-[13px] font-semibold tracking-wide text-[#8F9BA8]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Maritime Law</Link>
            <Link href="#" className="hover:text-white transition-colors">API Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
