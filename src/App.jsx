import React, { useState } from 'react';
import { 
  Phone, 
  Search, 
  Server, 
  Database, 
  Cloud, 
  Clock, 
  Cpu, 
  CheckCircle, 
  XCircle, 
  LayoutDashboard, 
  ArrowRight, 
  ArrowDown, 
  ChevronRight,
  User,
  Activity,
  Zap,
  RefreshCcw,
  Send,
  Fingerprint
} from 'lucide-react';

const ArchitectureDiagram  = () => {
  const StepBox = ({ title, subtext, icon: Icon, color = "blue", type = "rectangle", extra = null }) => {
    const bgColors = {
      blue: "bg-blue-50 border-blue-200",
      cyan: "bg-cyan-50 border-cyan-200",
      gray: "bg-slate-50 border-slate-200",
      green: "bg-emerald-50 border-emerald-200",
      red: "bg-rose-50 border-rose-200",
      indigo: "bg-indigo-50 border-indigo-200",
      amber: "bg-amber-50 border-amber-200",
    };

    const textColors = {
      blue: "text-blue-700",
      cyan: "text-cyan-700",
      gray: "text-slate-700",
      green: "text-emerald-700",
      red: "text-rose-700",
      indigo: "text-indigo-700",
      amber: "text-amber-700",
    };

    const bgColor = bgColors[color] || bgColors.blue;
    const textColor = textColors[color] || textColors.blue;

    const shapeClass = {
      rectangle: "rounded-lg",
      oval: "rounded-full px-6",
      cylinder: "rounded-[20% / 50%] h-24 flex flex-col justify-center",
    }[type] || "rounded-lg";

    return (
      <div className={`relative flex flex-col items-center p-4 border-2 ${bgColor} ${shapeClass} shadow-sm w-full transition-all hover:shadow-md hover:scale-[1.02]`}>
        <div className={`p-2 rounded-full ${bgColor.replace('-50', '-100')} mb-2`}>
          {Icon && <Icon size={24} className={textColor} />}
        </div>
        <h4 className={`font-bold text-sm text-center ${textColor}`}>{title}</h4>
        {subtext && <p className="text-[10px] text-slate-500 text-center mt-1 leading-tight">{subtext}</p>}
        {extra}
      </div>
    );
  };

  const HexagonLogic = () => (
    <div className="relative w-full max-w-md mx-auto my-8">
      <div className="bg-white border-2 border-slate-300 p-6 shadow-xl relative z-10" 
           style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)' }}>
        <div className="flex flex-col items-center py-4">
          <div className="flex items-center gap-2 mb-2">
            <Fingerprint className="text-indigo-600" size={24} />
            <h3 className="font-black text-indigo-900 uppercase tracking-wider">VoiceStack Matching Engine</h3>
          </div>
          <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-600 font-medium">
            <div className="flex items-center gap-2 font-bold text-indigo-900">
              <div className="w-2 h-2 rounded-full bg-indigo-600"></div> Patient Phone Number (Primary Key)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Timestamp Match (±2 Min Buffer)
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div> GFN / Destination Validation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div> Duration Sync (±15s Tolerance)
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Google Call Ads Architecture</h1>
        <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Caller-ID Focused Event Enrichment</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -z-10"></div>

        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
            <h2 className="text-xl font-bold text-blue-900">Real-Time Telephony Flow</h2>
          </div>

          <StepBox 
            type="oval" 
            title="Patient Search Ad" 
            subtext="Google Search with 'Call' button" 
            icon={Search} 
            color="blue" 
          />
          <div className="flex justify-center py-1"><ArrowDown className="text-blue-300" /></div>

          <StepBox 
            title="Google Ads System" 
            subtext="Allocates Google Forwarding Number (GFN)" 
            icon={Activity} 
            color="blue" 
          />
          <div className="flex justify-center py-1"><ArrowDown className="text-blue-300" /></div>

          <div className="relative">
            <StepBox 
              title="VoiceStack Platform" 
              subtext="Receives call + Capture Patient Caller ID" 
              icon={Server} 
              color="cyan" 
            />
            <div className="hidden md:flex absolute top-1/2 -right-16 items-center z-20 group">
                <div className="h-px w-12 bg-indigo-400 border-t border-dashed border-indigo-500"></div>
                <div className="bg-indigo-600 text-white p-1 rounded-full animate-pulse shadow-lg">
                  <Send size={12} />
                </div>
                <div className="absolute -top-6 left-2 whitespace-nowrap text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                    ID TRIGGER
                </div>
            </div>
          </div>
          
          <div className="flex justify-center py-1"><ArrowDown className="text-blue-300" /></div>

          <div className="bg-white border-2 border-cyan-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-cyan-50">
              <Zap size={14} className="text-cyan-500" />
            </div>
            <h4 className="font-bold text-xs text-cyan-800 mb-3 uppercase tracking-tighter">Inbound Webhook Handling</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-50 p-2 rounded border border-slate-100 text-[10px] font-medium">Capture Patient Phone</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100 text-[10px] font-medium">Attribution: Pending</div>
              <div className="bg-slate-50 p-2 rounded border border-slate-100 text-[10px] font-medium">Log GFN Dialed</div>
              <div className="bg-blue-600 text-white p-2 rounded text-[10px] font-bold flex items-center justify-center gap-1">
                <Database size={10} /> Sync Lead
              </div>
            </div>
          </div>

          <div className="flex justify-center py-1"><ArrowDown className="text-blue-300" /></div>

          <div className="flex gap-4 items-start">
            <div className="flex-1">
              <StepBox 
                title="Clinic Phone" 
                subtext="Inbound Call Routing" 
                icon={Phone} 
                color="gray" 
              />
            </div>
            <div className="flex flex-col justify-center h-full pt-4">
               <ChevronRight className="text-slate-300" />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 p-2 bg-emerald-50 border border-emerald-100 rounded text-[10px] font-bold text-emerald-700">
                <CheckCircle size={12} /> ANSWERED
              </div>
              <div className="flex items-center gap-2 p-2 bg-rose-50 border border-rose-100 rounded text-[10px] font-bold text-rose-700">
                <XCircle size={12} /> MISSED
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
            <h2 className="text-xl font-bold text-indigo-900">Enrichment Flow</h2>
          </div>

          <StepBox 
            type="oval" 
            title="Caller ID Event Listener" 
            subtext="Triggered on Virtual Number Incoming" 
            icon={Fingerprint} 
            color="indigo" 
          />
          <div className="flex justify-center py-1"><ArrowDown className="text-indigo-300" /></div>

          <StepBox 
            title="Google Ads API Worker" 
            subtext="Query for matching Patient Caller ID" 
            icon={Cpu} 
            color="indigo" 
          />
          <div className="flex justify-center py-1"><ArrowDown className="text-indigo-300" /></div>

          <StepBox 
            title="Google Ads API" 
            subtext="Lookup metadata for unique Caller ID" 
            icon={Cloud} 
            color="blue" 
          />
          <div className="flex justify-center py-1"><ArrowDown className="text-indigo-300" /></div>

          <div className="bg-slate-800 text-white p-4 rounded-xl border border-slate-700 shadow-lg relative">
             <div className="absolute -top-3 left-4 bg-indigo-600 text-[8px] font-black px-2 py-0.5 rounded text-white uppercase">Data Buffer</div>
             <div className="flex items-center gap-2 mb-2 text-blue-400">
               <Database size={16} />
               <span className="text-[10px] font-bold uppercase tracking-widest">Raw Google Logs</span>
             </div>
             <div className="text-xs font-mono text-slate-300">
               STAGING: raw_google_calls <br/>
               WHERE caller_id = :patient_number
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <div className="flex justify-center gap-12 mb-4">
           <div className="flex flex-col items-center">
             <ArrowDown size={32} className="text-cyan-400 animate-bounce" />
             <span className="text-[9px] font-bold text-cyan-600 uppercase">Patient Phone (CID)</span>
           </div>
           <div className="flex flex-col items-center">
             <ArrowDown size={32} className="text-indigo-400 animate-bounce" />
             <span className="text-[9px] font-bold text-indigo-600 uppercase">Google Caller ID</span>
           </div>
        </div>
        
        <HexagonLogic />

        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mt-4">
           <div className="flex flex-col items-center">
             <div className="text-emerald-600 font-bold text-xs mb-2 uppercase tracking-tighter">Unique ID Match</div>
             <StepBox title="Set Status: Enriched" subtext="Full Marketing Attribution Link" icon={CheckCircle} color="green" />
           </div>
           <div className="flex flex-col items-center">
             <div className="text-rose-600 font-bold text-xs mb-2 uppercase tracking-tighter">ID Mismatch / Latency</div>
             <StepBox title="Unmatched / Unknown" subtext="Organic call or API delay" icon={XCircle} color="red" />
           </div>
        </div>
      </div>

      <div className="max-w-xs mx-auto mt-16">
        <StepBox 
          type="cylinder" 
          title="Master Leads Database" 
          subtext="Patient Phone as Unique Identifier" 
          icon={Database} 
          color="gray" 
        />
      </div>

      <div className="max-w-6xl mx-auto mt-20 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-blue-400" size={20} />
            <h3 className="text-white font-bold text-sm">Patient Acquisition Dashboard</h3>
          </div>
          <div className="text-slate-500 text-[10px] font-mono">ID_SYNC: ENABLED</div>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 uppercase font-bold tracking-tighter">
                  <th className="pb-3 px-2">Patient Phone</th>
                  <th className="pb-3 px-2">Timestamp</th>
                  <th className="pb-3 px-2">Outcome</th>
                  <th className="pb-3 px-2">Ad Campaign</th>
                  <th className="pb-3 px-2">Match Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-3 px-2 font-bold text-slate-900">+1 (555) 0123</td>
                  <td className="py-3 px-2">Oct 12, 10:42 AM</td>
                  <td className="py-3 px-2 text-emerald-600 font-bold">Answered</td>
                  <td className="py-3 px-2">Emergency Dentist</td>
                  <td className="py-3 px-2"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Enriched (CID Match)</span></td>
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-3 px-2 font-bold text-slate-900">+1 (555) 9876</td>
                  <td className="py-3 px-2">Oct 12, 11:15 AM</td>
                  <td className="py-3 px-2 text-rose-600 font-bold">Missed</td>
                  <td className="py-3 px-2">Tooth Extraction</td>
                  <td className="py-3 px-2"><span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Enriched (CID Match)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 opacity-50">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
          <div className="w-6 h-4 rounded-full border border-slate-300 bg-white"></div> Start/End
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
          <Fingerprint size={14} /> CID Match
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
          <div className="w-6 h-6 rounded-[50%/20%] border border-slate-300 bg-white"></div> Database
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
          <div className="w-6 h-4 border border-slate-300 bg-white" style={{clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)'}}></div> Logic
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
          <Zap size={14} /> ID Trigger
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram ;


// generated by gemini