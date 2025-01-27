import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Marketplace | Login',
  description: 'Login to access your NFT collection and marketplace features',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >
      
        <main className="w-full">
          {children}
        </main>
        
        <footer className="text-center text-sm text-gray-500">
          <p>Protected by advanced blockchain security</p>
        </footer>
    </div>
  )
}
