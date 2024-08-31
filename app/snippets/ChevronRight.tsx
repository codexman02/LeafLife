export default function ChevronRight({width,height,bg}:{width:string,height:string,bg:string}){
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" className={`bi bi-chevron-right ${bg} font-bold`} viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>
        </>
    )

}