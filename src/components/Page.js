function Page({children, pageNumber}){
  return (
  <section className="page" id={pageNumber}>
    {children}
  </section>
  )
}

export default Page;
