import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </>
  )
}