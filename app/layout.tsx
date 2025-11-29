
import './global.css'
export const metadata = {
  title: 'noOneAlone',
  description: 'You Talk. We Listen.'
}
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
