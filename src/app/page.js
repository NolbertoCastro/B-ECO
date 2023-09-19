import Carrousel from "@/components/Carrousel"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import QS from "@/components/QS"
import Head from "next/head"
import Image from "next/image"
import Logo from '@/Assets/Logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>B-Eco</title>
      </Head>
      <Header/>
      <Carrousel/>
      <section className="flex flex-col gap-6">
        <QS/>
        <section className='w-[100vw] min-h-[80vh] flex bg-white items-center justify-center py-12'>
          <section className='flex w-8/12 flex-col h-full align-middle justify-center gap-12'>
              <h2 className='text-BecoGreen font-bold text-5xl'>¿Qué hacemos?</h2>
              <p className='text-BecoGreen'>Excepturi est tenetur consequatur maxime autem dolorum provident. Molestiae natus quo non aliquid voluptates ut harum eveniet. Ea omnis possimus sit quia eos quod quo. Dicta voluptatibus iste esse commodi ea quidem consequatur fugiat architecto autem rerum dolores ducimus qui quo. Ipsum sint atque voluptatum quasi commodi quasi eligendi tenetur deserunt vero. Et et neque aut ut. Voluptatum facilis quis ut enim consequatur dolorem ratione quas sunt quia. Quibusdam rem fuga beata sit veniam et est odio iure pariatur est dolorem ducimus esse. Dolorem deleniti debitis voluptatem velit aut dolorum voluptatem quia sunt rerum dolorum ut voluptas. Molestias itaque nihil illum temporibus sed recusandae tempore eligendi omnis ut ut. Repellendus animi ut ipsa qui nihil id nihil distinctio odit ut rem cupiditate. Incidunt sit hic sit iusto reiciendis unde. Assumenda enim ex pariatur non est voluptatibus nihil. Ut impedit consequatur qui iure ducimus rem repellat reiciendis qui dignissimos similique. Quia qui quasi esse. Ut et velit voluptatem qui. Provident et quidem sed qui est sint fugit illo corrupti harum quae ipsam ut. Distinctio ut et maiores.</p>
          </section>
        </section>
        <section className='w-[100vw] min-h-[80vh] flex bg-white items-center justify-center py-12' id="Siguenos">
          <section className='flex w-8/12 flex-col h-full align-middle justify-center gap-12'>
              <h2 className='text-center text-BecoGreen font-bold text-5xl'>Sigue nuestras acciones</h2>
              <p className='text-center text-BecoGreen'>Inventore corporis quis saepe quaerat aliquam enim repudiandae adipisci velit nemo. Sint magnam autem repellendus quis deleniti quo accusamus commodi ut enim aspernatur quod et. Sed enim eos id nesciunt et alias consectetur ut eos ex nisi beatae quasi blanditiis. Dolorem iste est dolorem corrupti qui laborum. Odit quis aut autem modi sed perspiciatis qui dolore quidem in at. Velit dolor nihil nesciunt maiores vero magnam dolorem libero quia culpa. Iure ut minima at id eos doloremque totam quasi in aspernatur et illo enim qui pariatur.</p>
              <h3 className='text-center text-BecoGreen text-3xl max-[480px]:text-xl'>@grupoestudiantil_b.eco</h3>
          </section>
        </section>
        <section className='w-[100vw] min-h-[80vh] flex bg-white items-center justify-center py-12' id="Alianzas">
          <section className='flex w-8/12 flex-col h-full align-middle justify-center gap-12'>
              <h2 className='text-center text-BecoGreen font-bold text-5xl'>Alianzas</h2>
              <p className='text-center text-BecoGreen'>Excepturi est tenetur consequatur maxime autem dolorum provident. Molestiae natus quo non aliquid voluptates ut harum eveniet. Ea omnis possimus sit quia eos quod quo. Dicta voluptatibus iste esse commodi ea quidem consequatur fugiat architecto autem rerum dolores ducimus qui quo. Ipsum sint atque voluptatum quasi commodi quasi eligendi tenetur deserunt vero. Et et neque aut ut. Voluptatum facilis quis ut enim consequatur dolorem ratione quas sunt quia. Quibusdam rem fuga beata sit veniam et est odio iure pariatur est dolorem ducimus esse. Dolorem deleniti debitis voluptatem velit aut dolorum voluptatem quia sunt rerum dolorum ut voluptas. Molestias itaque nihil illum temporibus sed recusandae tempore eligendi omnis ut ut. Repellendus animi ut ipsa qui nihil id nihil distinctio odit ut rem cupiditate. Incidunt sit hic sit iusto reiciendis unde. Assumenda enim ex pariatur non est voluptatibus nihil. Ut impedit consequatur qui iure ducimus rem repellat reiciendis qui dignissimos similique. Quia qui quasi esse. Ut et velit voluptatem qui. Provident et quidem sed qui est sint fugit illo corrupti harum quae ipsam ut. Distinctio ut et maiores.</p>
              <section className="flex flex-wrap gap-5">
                <section className="flex flex-[1_0_180px] items-center justify-center min-h-[200px] border-4 border-zinc-800">
                  <Image src={Logo} alt="Partner" className="w-40 h-40 saturate-0 object-contain"/>
                </section>
                <section className="flex flex-[1_0_180px] items-center justify-center min-h-[200px] border-4 border-zinc-800">
                  <Image src={Logo} alt="Partner" className="w-40 h-40 saturate-0 object-contain"/>
                </section>
              </section>
          </section>
        </section>
      </section>
      <Footer/>
    </>    
  )
}
