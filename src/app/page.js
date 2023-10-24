import AnimeList from "@/components/AnimeList"
import Link from "next/link"
import Header from "@/components/AnimeList/header"

const Page = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  
  return (
    
    <div >
      {/* Anime Populer */}
      <section>
        <Header title="Paling Populer" linkTitle="lihat semua" linkHref="/populer" />
        <AnimeList api={topAnime}/>            
      </section>
    </div>
  
  )
}

export default Page
