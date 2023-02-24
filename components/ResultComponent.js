// import Link from 'next/link';
// import Header from './Header';
// import Search from '../components/Search';
// import Image from 'next/image';
// import Footer from './Footer';





// export default function ResultComponent(props) {

//   let data = [
//     {
//       "id": "8f35d7fe-84fb-4fcf-b4e8-77b7b9184c5c",
//       "content_type": "Movie",
//       "title": "Titanic",
//       "released_on": "1997-12-19T00:00:00Z",
//       "poster_url": "https://img.rgstatic.com/content/movie/8f35d7fe-84fb-4fcf-b4e8-77b7b9184c5c/poster-780.jpg",
//       "service_groups": [
//         327,
//         332,
//         333,
//         334,
//         337,
//         347,
//         375,
//         380
//       ],
//       "slug": "titanic-1997"
//     },
//     {
//       "id": "425259b3-0f30-4fe2-aaa9-76673e14462d",
//       "content_type": "Show",
//       "title": "Titanic",
//       "released_on": "2012-03-21T00:00:00Z",
//       "poster_url": "https://img.rgstatic.com/content/show/425259b3-0f30-4fe2-aaa9-76673e14462d/poster-780.jpg",
//       "service_groups": [
//         333,
//         347
//       ],
//       "slug": "titanic-2012"
//     },
//     {
//       "id": "8db94c09-a596-4bf3-b803-47d9c5d80da7",
//       "content_type": "Movie",
//       "title": "Titanic",
//       "released_on": "1946-06-21T00:00:00Z",
//       "poster_url": "https://img.rgstatic.com/content/movie/8db94c09-a596-4bf3-b803-47d9c5d80da7/poster-780.jpg",
//       "service_groups": [
//         157,
//         357
//       ],
//       "slug": "titanic-1943"
//     },
//     {
//       "id": "e3fd82cc-e0fb-44b6-95e0-7847feb198f4",
//       "content_type": "Movie",
//       "title": "Titanic",
//       "released_on": "1953-04-11T00:00:00Z",
//       "poster_url": "https://img.rgstatic.com/content/movie/e3fd82cc-e0fb-44b6-95e0-7847feb198f4/poster-780.jpg",
//       "service_groups": [
//         327,
//         332,
//         333,
//         334,
//         337,
//         347,
//         380
//       ],
//       "slug": "titanic-1953"
//     },
//     {
//       "id": "05395d81-cc65-4856-9bf8-fc33fb64b56e",
//       "content_type": "Show",
//       "title": "Titanic",
//       "released_on": "1996-11-17T00:00:00Z",
//       "poster_url": "https://img.rgstatic.com/content/show/05395d81-cc65-4856-9bf8-fc33fb64b56e/poster-780.jpg",
//       "service_groups": [
//         157,
//         247,
//         333,
//         380
//       ],
//       "slug": "titanic-1996"
//     },

//   ]
//   return (
//     <>
//       <Search />
//       {/* return <div>{props.children(results)}</div> */}
//       <div className="mt-20 flex flex-wrap items-center justify-center">
//         <p className="text-center text-2xl mb-10 font-bold text-black w-full">Search Results:</p>
//         {data.map(item => (
//           <div key={item.id} className="flex flex-wrap items-center justify-center gap-10">
//             <img src={item.poster_url} className="object-fill h-40 w-96 ... w-16 md:w-32 lg:w-48 transform transition duration-300 hover:scale-110 w-full h-auto"></img>
//             <div>
//               <p>Title: {item.title}</p>
//               <p>Content Type: {item.content_type}</p>
//               <p>Release Date: {item.released_on}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//     </>
//   );
// }