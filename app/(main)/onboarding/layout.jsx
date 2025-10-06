import { getCurrentUser } from "@/actions/onboarding";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Onboarding - ZenthCare",
  description: "Complete your profile to get started with ZenthCare",
};

const OnboardingLayout = async ({ children }) => {
  // Get complete user profile
  const user = await getCurrentUser();

  // Redirect users who have already completed onboarding
  if (user) {
    if (user.role === "PATIENT") {
      redirect("/doctors");
    } else if (user.role === "DOCTOR") {
      // Check verification status for doctors
      if (user.verificationStatus === "VERIFIED") {
        redirect("/doctor");
      } else {
        redirect("/doctor/verification");
      }
    } else if (user.role === "ADMIN") {
      redirect("/admin");
    }
  }
  return (
    <>
      <Script
        src="https://unpkg.com/@vonage/client-sdk-video@latest/dist/js/opentok.js"
        onLoad={handleScriptLoad}
        onError={() => {
          toast.error("Failed to load video call script");
          setIsLoading(false);
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">
            Video Consultation
          </h1>
          <p className="text-muted-foreground">
            {isConnected
              ? "Connected"
              : isLoading
              ? "Connecting..."
              : "Connection failed"}
          </p>
        </div>

        {isLoading && !scriptLoaded ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-12 w-12 text-emerald-400 animate-spin mb-4" />
            <p className="text-white text-lg">
              Loading video call components...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Publisher (Your video) */}
              <div className="border border-emerald-900/20 rounded-lg overflow-hidden">
                <div className="bg-emerald-900/10 px-3 py-2 text-emerald-400 text-sm font-medium">
                  You
                </div>
                <div
                  id="publisher"
                  className="w-full h-[300px] md:h-[400px] bg-muted/30"
                >
                  {!scriptLoaded && (
                    <div className="flex items-center justify-center h-full">
                      <div className="bg-muted/20 rounded-full p-8">
                        <User className="h-12 w-12 text-emerald-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Subscriber (Other person's video) */}
              <div className="border border-emerald-900/20 rounded-lg overflow-hidden">
                <div className="bg-emerald-900/10 px-3 py-2 text-emerald-400 text-sm font-medium">
                  Other Participant
                </div>
                <div
                  id="subscriber"
                  className="w-full h-[300px] md:h-[400px] bg-muted/30"
                >
                  {(!isConnected || !scriptLoaded) && (
                    <div className="flex items-center justify-center h-full">
                      <div className="bg-muted/20 rounded-full p-8">
                        <User className="h-12 w-12 text-emerald-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Video controls */}
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                onClick={toggleVideo}
                className={`rounded-full p-4 h-14 w-14 ${
                  isVideoEnabled
                    ? "border-emerald-900/30"
                    : "bg-red-900/20 border-red-900/30 text-red-400"
                }`}
                disabled={!publisherRef.current}
              >
                {isVideoEnabled ? <Video /> : <VideoOff />}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={toggleAudio}
                className={`rounded-full p-4 h-14 w-14 ${
                  isAudioEnabled
                    ? "border-emerald-900/30"
                    : "bg-red-900/20 border-red-900/30 text-red-400"
                }`}
                disabled={!publisherRef.current}
              >
                {isAudioEnabled ? <Mic /> : <MicOff />}
              </Button>

              <Button
                variant="destructive"
                size="lg"
                onClick={endCall}
                className="rounded-full p-4 h-14 w-14 bg-red-600 hover:bg-red-700"
              >
                <PhoneOff />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                {isVideoEnabled ? "Camera on" : "Camera off"} •
                {isAudioEnabled ? " Microphone on" : " Microphone off"}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                When you're finished with your consultation, click the red
                button to end the call
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OnboardingLayout;