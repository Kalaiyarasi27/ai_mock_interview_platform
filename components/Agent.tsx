"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

interface AgentProps {
    userName: string;
}

const Agent = ({ userName }: AgentProps) => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const isSpeaking = true;
    const messages = [
        'Whats your name?',
        'My name is Kalaiyarasi,nice to meet you!'
    ];
    const lastMessage = messages[messages.length-1];
    const handleCall = () => {
        setCallStatus(CallStatus.CONNECTING);

        // Simulate connecting delay
        setTimeout(() => {
            setCallStatus(CallStatus.ACTIVE);
        }, 1000);
    };

    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED);
    };

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image
                            src="/ai-avatar.png"
                            alt="profile-image"
                            width={65}
                            height={54}
                            className="object-cover"
                        />
                        {isSpeaking && <span className="animate-speak" />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image
                            src="/user-avatar.png"
                            alt="user avatar"
                            width={540}
                            height={540}
                            className="rounded-full object-cover size-[120px]"
                        />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {messages.length > 0 && (
                <div className="transcript-border">
                   <div className="transcript">
                        <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0' , 'animate-fadeIn opacity-100')}>
                            {lastMessage}
                        </p>
                   </div>
                </div>
            )}
            <div className="w-full flex justify-center mt-4">
                {callStatus !== CallStatus.ACTIVE ? (
                    <button className="relative btn-call" onClick={handleCall}>
                        <span
                            className={cn(
                                "absolute animate-ping rounded-full opacity-75",
                                callStatus !== "CONNECTING" && "hidden"
                            )}/>
                        <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                  ? "Call"
                  : ". . ."}
            </span>

                    </button>
                ) : (
                    <button className="btn-disconnect" onClick={handleDisconnect}>
                        End
                    </button>
                )}
            </div>
        </>
    );
};

export default Agent;
