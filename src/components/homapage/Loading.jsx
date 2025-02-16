"use client";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
return (
    <div className="min-h-32 min-w-screen mt-8">
        <div className='justify-center items-center flex'>
            <DotLottieReact src="https://lottie.host/9aad8351-11a8-43ec-9445-4201864252e1/aroVhevObA.json" loop autoplay style={{ height: '120px', width: '120px' }}/>
        </div>
    </div>
    );
}

export default Loading;