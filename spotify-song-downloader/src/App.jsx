import DownloadSong from './components/DownloadSong'
import SongDownloader from './components/SongDownloader'

function App() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        {/* <SongDownloader /> */}
        <DownloadSong />
      </div>
    </>
  )
}

export default App
