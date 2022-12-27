import React from "react";
import { Link } from 'react-router-dom'
import Paginate from '../components/Paginate';


function logout() {
  const handleLogout = () => {
      return window.localStorage.removeItem('token')
  }
  return (
      <Link to="/admin/login">
          <input onClick={handleLogout}
             type="submit"
             className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             value="Sign Out"
          />
      </Link>
  )
}

const AdminDashboardPage = () => {
  postsPerPage
  const [videoPost, setVideoPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(3);


  useEffect(() => {
    const fetchVideos = async (data) => {
       const { videos } = await fetch(
          'https://reacttask.mkdlabs.com/v1/api/rest/video/PAGINATE',{
            method: 'POST',
            headers: {
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
            data: videos.json()
          }
       );

       setVideoPost(videos);
    };
    fetchVideos();
 }, []);


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
 };

  const previousPage = () => {
    if (currentPage !== 1) {
       setCurrentPage(currentPage - 1);
    }
 };

 const nextPage = () => {
  if (currentPage !== Math.ceil(videoPost.length / videosPerPage)) {
     setCurrentPage(currentPage + 1);
  }
};

  return (
    <>
      <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700 ">
        Dashboard
      </div>
      {logout()}
      <Paginate
                  postsPerPage={videosPerPage}
                  totalPosts={videoPost.length}
                  paginate={paginate}
                  previousPage={previousPage}
                  nextPage={nextPage}
               />
    </>
  );

  
};

export default AdminDashboardPage;
