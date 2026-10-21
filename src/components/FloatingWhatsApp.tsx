"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { contactData } from "@/data/contact";

export function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(true);

  const whatsappUrl = `https://wa.me/91${contactData.whatsapp}?text=${encodeURIComponent(
    contactData.whatsappMessage
  )}`;

  return (
    <>
      {/* Floating Action Group (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Chat Tooltip Preview */}
        {tooltipVisible && (
          <div className="hidden sm:flex items-center gap-2 bg-[#141414] border border-white/10 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat with Ramnagar ACE Coach</span>
            <button
              onClick={() => setTooltipVisible(false)}
              className="text-zinc-500 hover:text-white ml-1"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF2D2D] rounded-full border-2 border-[#141414] flex items-center justify-center text-[9px] font-bold">
            1
          </span>
          <MessageCircle className="w-7 h-7 fill-current" />
        </a>
      </div>

      {/* Floating Click-to-Call Button (Mobile Only - Bottom Left) */}
      <div className="sm:hidden fixed bottom-6 left-6 z-50">
        <a
          href={`tel:${contactData.phone}`}
          aria-label="Call ACE Gym"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#181818] border border-white/20 text-[#FF2D2D] shadow-xl hover:bg-[#FF2D2D] hover:text-white transition-all"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </>
  );
}
