// pages/demo.tsx or components/VideoDemo.tsx

import VideoPlayer from "./VideoPlayer";

export default function VideoDemo() {
    return (
        <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-6 overflow-hidden" id="demo">
            
                {/* Header */}
                <div className="text-center space-y-4 pt-8">
                    <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Virtual Presentation
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional video demonstrations
                    </p>
                </div>

                {/* Full Featured Players - Large Size */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pt-8 max-w-7xl w-full mx-auto">
                    {/* Video 1 */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-800">Video 1</h2>
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                    
                                </span>
                            </div>
                            <p className="text-gray-600">
                                Advanced analytics dashboard walkthrough and implementation guide
                            </p>
                            <VideoPlayer
                                src="/videos/Video1.mp4"
                                poster=""
                                title="Marketing Analytics Dashboard"
                                className="w-full h-96" // Increased height
                                autoPlay={false}
                                controls={true}
                                preload="auto"
                            />
                        </div>
                    </div>

                    {/* Video 2 */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-gray-800">Video 2</h2>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                    
                                </span>
                            </div>
                            <p className="text-gray-600">
                                Interactive data visualization techniques and best practices
                            </p>
                            <VideoPlayer
                                src="/videos/Video2.mp4"
                                poster=""
                                title="Data Visualization Masterclass"
                                className="w-full h-96" // Increased height
                                autoPlay={false}
                                controls={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Additional Videos Grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                   
                    <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Tutorial</h3>
                        <SimpleVideoPlayer
                            src="/videos/Video1.mp4"
                            poster="/images/video-poster.jpg"
                            className="w-full h-48"
                        />
                    </div>

                   
                    <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Setup Guide</h3>
                        <SimpleVideoPlayer
                            src="/videos/Video2.mp4"
                            poster="/images/video-poster.jpg"
                            className="w-full h-48"
                        />
                    </div>

                    
                    <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Best Practices</h3>
                        <SimpleVideoPlayer
                            src="/videos/Video1.mp4"
                            poster="/images/video-poster.jpg"
                            className="w-full h-48"
                        />
                    </div>
                </div> */}

                {/* Full Width Video Section */}
                {/* <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 mt-12">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Presentation</h2>
                        <p className="text-gray-600 text-lg">Complete walkthrough of our analytics platform</p>
                    </div>
                    <VideoPlayer
                        src="/videos/Video1.mp4"
                        poster="/images/video-poster.jpg"
                        title="Complete Platform Overview"
                        className="w-full h-[600px] max-w-6xl mx-auto" // Extra large height
                        autoPlay={false}
                        controls={true}
                    />
                </div> */}
            
        </div>
    );
}