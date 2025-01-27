import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Marketplace | Sign Up',
  description: 'Create your account to start trading NFTs',
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
    
        <main className="w-full">
          {children}
        </main>
        
        
        <footer className="text-center text-sm text-gray-500">
          <p>Your gateway to exclusive digital assets</p>
        </footer>
      
    </div>
  )
}
