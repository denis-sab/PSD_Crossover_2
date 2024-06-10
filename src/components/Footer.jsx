import React from 'react'

function Footer() {
  return (
    <>
      <div className="flex flex-row min-h-2.5 w-full justify-between bg-zinc-100 px-20">
        
        {/* labels bar left */}
        <div className='flex flex-row items-center justify-center py-4'>
          <p className='font-playfair font-semibold ml-20'>Terms and conditions</p>
          <p className='font-playfair font-semibold mx-5'>Privacy</p>
        </div>

        {/* Iconbar-right */}
        <div className='flex flex-row items-center justify-center py-4 bg-zinc-100'>

          <p className='font-playfair font-semibold mx-5 mb-3'>Follow</p>
          {/* Facebook icon */}
          <div className='flex flex-col h-6 my-2 mx-3 justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#616161" d="M6.38315 12.7824H8.98714V23.6129C8.98714 23.8267 9.15864 24 9.3703 24H13.7855C13.9971 24 14.1686 23.8267 14.1686 23.6129V12.8334H17.1621C17.3568 12.8334 17.5205 12.6859 17.5427 12.4905L17.9974 8.50328C18.0099 8.39357 17.9755 8.28372 17.9028 8.20142C17.8301 8.11905 17.726 8.0719 17.6168 8.0719H14.1688V5.57249C14.1688 4.81904 14.5703 4.43698 15.3624 4.43698C15.4752 4.43698 17.6168 4.43698 17.6168 4.43698C17.8285 4.43698 18 4.26364 18 4.04988V0.389961C18 0.176129 17.8285 0.00286452 17.6168 0.00286452H14.5099C14.4879 0.00178065 14.4393 0 14.3675 0C13.8284 0 11.9546 0.106916 10.4744 1.48266C8.83434 3.0072 9.06232 4.83259 9.1168 5.14908V8.07182H6.38315C6.1715 8.07182 6 8.24508 6 8.45892V12.3952C6 12.6091 6.1715 12.7824 6.38315 12.7824Z"/>
            </svg>
          </div>

          {/* Twitter icon */}
          <div className='flex flex-col h-6 my-2 mx-3 justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#616161" d="M23.4561 4.30814C23.079 4.47835 22.6914 4.622 22.2953 4.73863C22.7643 4.19884 23.1218 3.56371 23.34 2.86869C23.3889 2.71291 23.3382 2.54238 23.2124 2.44049C23.0868 2.33853 22.9122 2.32631 22.7739 2.40976C21.9327 2.91755 21.0252 3.28248 20.0736 3.49587C19.1151 2.54254 17.8132 2 16.4674 2C13.6265 2 11.3152 4.35243 11.3152 7.24393C11.3152 7.47166 11.3294 7.69813 11.3574 7.92145C7.83212 7.60641 4.55474 5.84278 2.30416 3.03284C2.22396 2.93268 2.1004 2.8787 1.97389 2.88903C1.84731 2.89911 1.73358 2.97177 1.66964 3.08343C1.21317 3.88065 0.971858 4.79245 0.971858 5.72016C0.971858 6.98373 1.41508 8.1826 2.19802 9.11937C1.95996 9.03545 1.72894 8.93057 1.50845 8.80599C1.39008 8.73893 1.24561 8.73995 1.12801 8.80859C1.01034 8.87722 0.936555 9.00346 0.933459 9.14144C0.932917 9.16468 0.932917 9.18793 0.932917 9.21149C0.932917 11.0976 1.93023 12.7956 3.455 13.7212C3.32401 13.7078 3.19309 13.6885 3.06303 13.6632C2.92894 13.6372 2.79105 13.685 2.70063 13.7891C2.61005 13.8931 2.58009 14.0381 2.62181 14.1705C3.1862 15.964 4.63928 17.2832 6.39592 17.6854C4.93897 18.6142 3.27283 19.1007 1.52378 19.1007C1.15883 19.1007 0.791782 19.0789 0.432557 19.0356C0.254106 19.014 0.0834742 19.1213 0.0227002 19.294C-0.0380738 19.4668 0.0263389 19.6595 0.178158 19.7585C2.42509 21.2249 5.0232 22 7.69145 22C12.9369 22 16.2183 19.4823 18.0473 17.3702C20.3281 14.7367 21.6362 11.2508 21.6362 7.80648C21.6362 7.66259 21.634 7.51728 21.6297 7.37245C22.5295 6.68239 23.3042 5.84727 23.9347 4.8874C24.0304 4.74162 24.0201 4.54895 23.9091 4.41476C23.7983 4.28048 23.6137 4.23706 23.4561 4.30814Z"/>
            </svg>
           </div> 

          {/* Instagram icon */}
          <div className='flex flex-col h-6 my-2 mx-3 justify-center'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_136_412)">
              <path d="M11.8003 5.66211C8.46964 5.66211 5.70996 8.37421 5.70996 11.7524C5.70996 15.1307 8.42206 17.8428 11.8003 17.8428C15.1785 17.8428 17.8906 15.0831 17.8906 11.7524C17.8906 8.42179 15.1309 5.66211 11.8003 5.66211ZM11.8003 15.654C9.65915 15.654 7.89867 13.8936 7.89867 11.7524C7.89867 9.6113 9.65915 7.85082 11.8003 7.85082C13.9414 7.85082 15.7019 9.6113 15.7019 11.7524C15.7019 13.8936 13.9414 15.654 11.8003 15.654Z" fill="#616161"/>
              <path d="M18.1284 6.89884C18.8904 6.89884 19.5082 6.28106 19.5082 5.519C19.5082 4.75693 18.8904 4.13916 18.1284 4.13916C17.3663 4.13916 16.7485 4.75693 16.7485 5.519C16.7485 6.28106 17.3663 6.89884 18.1284 6.89884Z" fill="#616161"/>
              <path d="M22.0645 1.98387C20.8065 0.677419 19.0161 0 16.9839 0H7.01613C2.80645 0 0 2.80645 0 7.01613V16.9355C0 19.0161 0.677419 20.8065 2.03226 22.1129C3.33871 23.371 5.08065 24 7.06452 24H16.9355C19.0161 24 20.7581 23.3226 22.0161 22.1129C23.3226 20.8548 24 19.0645 24 16.9839V7.01613C24 4.98387 23.3226 3.24193 22.0645 1.98387ZM21.871 16.9839C21.871 18.4839 21.3387 19.6935 20.4677 20.5161C19.5968 21.3387 18.3871 21.7742 16.9355 21.7742H7.06452C5.6129 21.7742 4.40323 21.3387 3.53226 20.5161C2.66129 19.6452 2.22581 18.4355 2.22581 16.9355V7.01613C2.22581 5.56452 2.66129 4.35484 3.53226 3.48387C4.35484 2.66129 5.6129 2.22581 7.06452 2.22581H17.0323C18.4839 2.22581 19.6935 2.66129 20.5645 3.53226C21.3871 4.40323 21.871 5.6129 21.871 7.01613V16.9839Z" fill="#616161"/>
            </g>
            <defs>
            <clipPath id="clip0_136_412">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div> 

        </div>

      </div>
    </>
  )
}

export default Footer

