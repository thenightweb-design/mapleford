'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Brand tokens ───────────────────────────────────────── */
// Primary: Crimson Red  #C8102E
// Accent:  Golden       #D6B25E
// Surface: White/Cream

/* ─── Types ──────────────────────────────────────────────── */
interface Inquiry {
  _id: string; parentName: string; contactNumber: string; email: string;
  childName: string; childDob: string; gradeApplying: string; message: string;
  source?: string; status: string; createdAt: string;
}
interface GalleryItem {
  _id: string; title: string; imageUrl: string; category: string; description: string; createdAt: string;
}
interface Blog {
  _id: string; title: string; content: string; author: string;
  tags: string[]; featuredImage: string; published: boolean; createdAt: string;
}
interface SEOData {
  _id?: string; pagePath: string; title: string; description: string; keywords?: string; ogImage?: string;
}

/* ─── Nav ────────────────────────────────────────────────── */
const NAV = [
  { id: 'overview',  label: 'Overview'      },
  { id: 'enquiries', label: 'Enquiries'     },
  { id: 'gallery',   label: 'Gallery'       },
  { id: 'blogs',     label: 'Blog Posts'    },
  { id: 'seo',       label: 'SEO Settings'  },
];

/* ─── Helpers ────────────────────────────────────────────── */
function StatCard({ label, value, sub, gold }: { label: string; value: number | string; sub?: string; gold?: boolean }) {
  return (
    <div className="bg-white border border-[#e8d5a0] rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#C8102E] to-[#D6B25E] rounded-l-2xl" />
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 pl-1">{label}</p>
      <p className={`text-4xl font-black tracking-tighter pl-1 ${gold ? 'text-[#C8A84B]' : 'text-[#C8102E]'}`}>{value}</p>
      {sub && <p className="text-[10px] text-gray-400 font-medium mt-1 pl-1">{sub}</p>}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending:   'bg-amber-50 text-amber-700 border-amber-200',
    reviewed:  'bg-blue-50 text-blue-700 border-blue-200',
    contacted: 'bg-purple-50 text-purple-700 border-purple-200',
    enrolled:  'bg-green-50 text-green-700 border-green-200',
  };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${map[status] || 'bg-gray-50 text-gray-500 border-gray-200'}`}>
      {status}
    </span>
  );
}

function Empty({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="text-center py-20 px-8">
      <div className="w-14 h-14 rounded-2xl bg-[#FDF6E8] mx-auto flex items-center justify-center mb-4">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#D6B25E" strokeWidth="1.5"/><path d="M12 8v4M12 16h.01" stroke="#D6B25E" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </div>
      <p className="text-gray-500 font-semibold text-sm">{label}</p>
      {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
    </div>
  );
}

const gold = 'border-[#D6B25E] focus:ring-[#D6B25E]/30 focus:border-[#D6B25E]';
const inp = `w-full px-4 py-3 bg-[#FFFDF7] border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none ${gold} focus:ring-1 transition-all`;

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">{children}</label>
      {hint && <span className="text-[10px] text-gray-400">{hint}</span>}
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────── */
export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [creds, setCreds] = useState({ username: '', password: '' });
  const [loginErr, setLoginErr] = useState('');
  const [loginBusy, setLoginBusy] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [seoList, setSeoList] = useState<SEOData[]>([]);

  const [galForm, setGalForm] = useState({ title: '', imageUrl: '', category: 'General', description: '' });
  const [galEditId, setGalEditId] = useState<string | null>(null);
  const [galBusy, setGalBusy] = useState(false);

  const [seoForm, setSeoForm] = useState<SEOData>({ pagePath: '/', title: '', description: '', keywords: '', ogImage: '' });
  const [seoOk, setSeoOk] = useState(false);

  const blogRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (localStorage.getItem('adminToken')) { setLoggedIn(true); loadAll(); }
    else setLoading(false);
  }, []);

  const tk = () => localStorage.getItem('adminToken') || '';
  const H = () => ({ Authorization: `Bearer ${tk()}` });

  const loadAll = async () => {
    setLoading(true);
    try {
      const [a, b, c, d] = await Promise.all([
        fetch('/api/inquiries',   { headers: H() }),
        fetch('/api/gallery',     { headers: H() }),
        fetch('/api/blogs/admin', { headers: H() }),
        fetch('/api/seo',         { headers: H() }),
      ]);
      if (a.ok) setInquiries(await a.json());
      if (b.ok) setGallery(await b.json());
      if (c.ok) setBlogs(await c.json());
      if (d.ok) setSeoList(await d.json());
    } catch {}
    setLoading(false);
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault(); setLoginBusy(true); setLoginErr('');
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(creds) });
    if (res.ok) { const d = await res.json(); localStorage.setItem('adminToken', d.token); setLoggedIn(true); loadAll(); }
    else setLoginErr('Invalid username or password');
    setLoginBusy(false);
  };
  const logout = () => { localStorage.removeItem('adminToken'); setLoggedIn(false); };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Delete this enquiry?')) return;
    await fetch(`/api/inquiries/${id}`, { method: 'DELETE', headers: H() });
    setInquiries(p => p.filter(i => i._id !== id));
  };
  const setStatus = async (id: string, status: string) => {
    setInquiries(p => p.map(i => i._id === id ? { ...i, status } : i));
    await fetch(`/api/inquiries/${id}`, { method: 'PUT', headers: { ...H(), 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
  };

  const saveGallery = async (e: React.FormEvent) => {
    e.preventDefault(); setGalBusy(true);
    const url = galEditId ? `/api/gallery/${galEditId}` : '/api/gallery';
    const res = await fetch(url, { method: galEditId ? 'PUT' : 'POST', headers: { ...H(), 'Content-Type': 'application/json' }, body: JSON.stringify(galForm) });
    if (res.ok) { setGalForm({ title: '', imageUrl: '', category: 'General', description: '' }); setGalEditId(null); loadAll(); }
    else {
      const err = await res.json();
      alert(`Error: ${err.error || 'Failed to save image'}`);
    }
    setGalBusy(false);
  };
  const deleteGal = async (id: string) => {
    if (!confirm('Remove image?')) return;
    await fetch(`/api/gallery/${id}`, { method: 'DELETE', headers: H() });
    setGallery(p => p.filter(g => g._id !== id));
  };

  const saveSEO = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/seo', { method: 'POST', headers: { ...H(), 'Content-Type': 'application/json' }, body: JSON.stringify(seoForm) });
    setSeoOk(true); setTimeout(() => setSeoOk(false), 3000);
    setSeoForm({ pagePath: '/', title: '', description: '', keywords: '', ogImage: '' });
    loadAll();
  };

  const publishBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const g = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement)?.value || '';
    await fetch('/api/blogs', { method: 'POST', headers: { ...H(), 'Content-Type': 'application/json' }, body: JSON.stringify({ title: g('title'), author: g('author'), content: g('content'), tags: g('tags').split(',').map(t => t.trim()).filter(Boolean), featuredImage: g('image'), published: true }) });
    form.reset(); loadAll();
  };

  /* ══ LOGIN ══ */
  if (!loggedIn) return (
    <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center p-6">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C8102E]/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D6B25E]/8" />
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-sm relative">
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-[#C8102E] via-[#D6B25E] to-[#C8102E] rounded-t-3xl" />

        <div className="bg-white rounded-b-3xl shadow-xl border border-[#e8d5a0]/60 p-10">
          {/* Logo area */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C8102E] to-[#9e0d24] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-200">
              <span className="text-white font-black text-2xl">M</span>
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Mapleford Admin</h1>
            <p className="text-gray-400 text-sm mt-1">Sign in to manage your school</p>
          </div>

          <form onSubmit={login} className="space-y-4">
            <div>
              <Label>Username</Label>
              <input type="text" required autoComplete="username" value={creds.username}
                onChange={e => setCreds({ ...creds, username: e.target.value })}
                className={inp} placeholder="Enter your username" />
            </div>
            <div>
              <Label>Password</Label>
              <input type="password" required autoComplete="current-password" value={creds.password}
                onChange={e => setCreds({ ...creds, password: e.target.value })}
                className={inp} placeholder="••••••••" />
            </div>
            {loginErr && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-red-600 text-xs font-semibold">{loginErr}</p>
              </div>
            )}
            <button type="submit" disabled={loginBusy}
              className="w-full mt-2 bg-[#C8102E] hover:bg-[#a80d26] text-white py-3.5 rounded-xl font-black text-sm tracking-wider transition-all disabled:opacity-50 shadow-lg shadow-red-100">
              {loginBusy ? 'Signing in…' : 'Sign In →'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );

  /* ══ DASHBOARD ══ */
  const pending = inquiries.filter(i => i.status === 'pending').length;

  return (
    <div className="flex h-screen bg-[#FAFAF8] overflow-hidden">

      {/* ── SIDEBAR ── */}
      <aside className="w-60 flex-shrink-0 flex flex-col bg-white border-r border-[#e8d5a0]/60 shadow-sm">
        {/* Brand */}
        <div className="px-6 py-5 border-b border-[#e8d5a0]/40">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C8102E] to-[#9e0d24] flex items-center justify-center shadow-md shadow-red-100 flex-shrink-0">
              <span className="text-white font-black text-base leading-none">M</span>
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 leading-none">Mapleford</p>
              <p className="text-[10px] text-[#D6B25E] font-bold mt-0.5 uppercase tracking-wider">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.25em] px-3 mb-3">Management</p>
          {NAV.map(({ id, label }) => {
            const active = tab === id;
            return (
              <button key={id} onClick={() => setTab(id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  active
                    ? 'bg-gradient-to-r from-[#C8102E] to-[#a80d26] text-white shadow-md shadow-red-100'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-[#FDF6E8]'
                }`}>
                <span>{label}</span>
                {id === 'enquiries' && pending > 0 && (
                  <span className={`w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center ${active ? 'bg-white/20 text-white' : 'bg-[#C8102E] text-white'}`}>
                    {pending}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom links */}
        <div className="px-3 pb-5 space-y-1 border-t border-[#e8d5a0]/40 pt-3">
          <a href="/gallery" target="_blank"
            className="w-full flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-[#FDF6E8] transition-all">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/><rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3"/></svg>
            <span>View Gallery Page</span>
          </a>
          <a href="/" target="_blank"
            className="w-full flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-[#FDF6E8] transition-all">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>View Website</span>
          </a>
          <button onClick={logout}
            className="w-full flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-400 hover:text-[#C8102E] hover:bg-red-50 transition-all">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2H2v10h3M8 5l4 2-4 2M5 7h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="bg-white border-b border-[#e8d5a0]/60 px-8 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="h-6 w-0.5 bg-gradient-to-b from-[#C8102E] to-[#D6B25E] rounded-full" />
            <div>
              <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Admin</p>
              <h1 className="text-lg font-black text-gray-900 tracking-tight leading-none">
                {NAV.find(n => n.id === tab)?.label}
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={loadAll} title="Refresh data"
              className="w-9 h-9 rounded-xl border border-[#e8d5a0] bg-[#FDF6E8] flex items-center justify-center text-[#D6B25E] hover:bg-[#f0e4c0] transition-all">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7a5 5 0 005 5 5 5 0 003.5-1.4M12 7a5 5 0 00-5-5 5 5 0 00-3.5 1.4M1 3.5V2m0 1.5H2.5M13 10.5V12m0-1.5H11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </button>
            <div className="flex items-center space-x-2.5 bg-[#FFFDF7] border border-[#e8d5a0] rounded-xl px-3.5 py-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C8102E] to-[#9e0d24] flex items-center justify-center">
                <span className="text-white text-xs font-black">A</span>
              </div>
              <div>
                <p className="text-xs font-black text-gray-900 leading-none">Administrator</p>
                <p className="text-[10px] text-[#D6B25E] font-bold mt-0.5 uppercase tracking-wider">Full Access</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full flex-col space-y-3">
              <div className="w-8 h-8 border-2 border-[#C8102E] border-t-[#D6B25E] rounded-full animate-spin" />
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Loading…</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">

              {/* ══ OVERVIEW ══ */}
              {tab === 'overview' && (
                <motion.div key="ov" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="p-8 space-y-8">

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    <StatCard label="Total Enquiries"  value={inquiries.length}                                      sub="All time" />
                    <StatCard label="Awaiting Action"  value={pending}                                               sub="Pending review" gold />
                    <StatCard label="Gallery Images"   value={gallery.length}                                        sub="Live on website" />
                    <StatCard label="Published Blogs"  value={blogs.filter(b => b.published).length}                 sub="Articles" gold />
                  </div>

                  {/* Welcome banner */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#e8d5a0]/80 bg-white p-8 shadow-sm">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8102E] via-[#D6B25E] to-[#C8102E]" />
                    <div className="absolute right-0 inset-y-0 w-64 bg-gradient-to-l from-[#FDF6E8] to-transparent" />
                    <div className="relative">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">All systems live</span>
                      </div>
                      <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Welcome back, Administrator.</h2>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                        Manage all aspects of Mapleford International School — enquiries, gallery, SEO and blog content — from this central panel.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {[['📩 View Enquiries','enquiries'],['🖼 Manage Gallery','gallery'],['🔍 Edit SEO','seo']].map(([l,t]) => (
                          <button key={t} onClick={() => setTab(t)}
                            className="px-4 py-2 bg-[#FDF6E8] hover:bg-[#f0e4c0] border border-[#D6B25E]/50 text-gray-700 rounded-xl text-xs font-bold transition-all">
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Recent enquiries preview */}
                  <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 overflow-hidden shadow-sm">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8d5a0]/40">
                      <div>
                        <h3 className="text-sm font-black text-gray-900">Recent Enquiries</h3>
                        <p className="text-[10px] text-gray-400 mt-0.5">{inquiries.length} total</p>
                      </div>
                      <button onClick={() => setTab('enquiries')} className="text-[11px] font-bold text-[#C8102E] hover:underline">View all →</button>
                    </div>
                    {inquiries.length === 0
                      ? <Empty label="No enquiries yet" sub="Submissions from the website will appear here." />
                      : inquiries.slice(0, 5).map((inq, i) => (
                        <div key={inq._id} className={`flex items-center justify-between px-6 py-3.5 hover:bg-[#FFFDF7] transition-colors ${i < Math.min(inquiries.length, 5) - 1 ? 'border-b border-[#e8d5a0]/30' : ''}`}>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-[#FDF6E8] border border-[#e8d5a0] flex items-center justify-center text-[#C8102E] font-black text-sm">
                              {inq.parentName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{inq.parentName}</p>
                              <p className="text-[10px] text-gray-400">{inq.source || 'Website'} · Grade {inq.gradeApplying}</p>
                            </div>
                          </div>
                          <StatusBadge status={inq.status} />
                        </div>
                      ))
                    }
                  </div>
                </motion.div>
              )}

              {/* ══ ENQUIRIES ══ */}
              {tab === 'enquiries' && (
                <motion.div key="eq" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-8 space-y-6">
                  <div className="grid grid-cols-4 gap-4">
                    {[['Total', inquiries.length],['Pending', inquiries.filter(i => i.status==='pending').length],['Contacted', inquiries.filter(i => i.status==='contacted').length],['Enrolled', inquiries.filter(i => i.status==='enrolled').length]].map(([l, v]) => (
                      <div key={String(l)} className="bg-white border border-[#e8d5a0]/60 rounded-xl px-5 py-4 shadow-sm">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{l}</p>
                        <p className="text-2xl font-black text-[#C8102E]">{v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 overflow-hidden shadow-sm">
                    {inquiries.length === 0
                      ? <Empty label="No enquiries yet" sub="Enquiries submitted on the website appear here automatically." />
                      : (
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[900px]">
                            <thead>
                              <tr className="bg-[#FFFDF7] border-b border-[#e8d5a0]/50">
                                {['Date','Source','Parent','Child','Grade','Status',''].map(h => (
                                  <th key={h} className="px-5 py-4 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">{h}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {inquiries.map((inq, i) => (
                                <tr key={inq._id} className={`hover:bg-[#FFFDF7] transition-colors ${i < inquiries.length-1 ? 'border-b border-[#e8d5a0]/30' : ''}`}>
                                  <td className="px-5 py-4 text-xs text-gray-400 whitespace-nowrap font-medium">
                                    {new Date(inq.createdAt).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}
                                  </td>
                                  <td className="px-5 py-4">
                                    <span className="text-[10px] font-bold text-[#C8102E] bg-red-50 border border-red-100 px-2 py-0.5 rounded-lg whitespace-nowrap">
                                      {inq.source || 'Website'}
                                    </span>
                                  </td>
                                  <td className="px-5 py-4">
                                    <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">{inq.parentName}</p>
                                    <p className="text-[10px] text-gray-400 mt-0.5">{inq.email}</p>
                                    <p className="text-[10px] text-gray-400">{inq.contactNumber}</p>
                                  </td>
                                  <td className="px-5 py-4">
                                    <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">{inq.childName}</p>
                                    <p className="text-[10px] text-gray-400 mt-0.5">DOB: {new Date(inq.childDob).toLocaleDateString('en-IN')}</p>
                                  </td>
                                  <td className="px-5 py-4">
                                    <span className="px-3 py-1.5 bg-[#FDF6E8] border border-[#D6B25E]/40 text-gray-700 rounded-lg text-[10px] font-bold uppercase whitespace-nowrap">
                                      {inq.gradeApplying}
                                    </span>
                                  </td>
                                  <td className="px-5 py-4">
                                    <select value={inq.status} onChange={e => setStatus(inq._id, e.target.value)}
                                      className="bg-[#FFFDF7] border border-[#D6B25E]/50 text-xs text-gray-700 rounded-xl px-2.5 py-2 focus:outline-none focus:border-[#C8102E] cursor-pointer font-bold">
                                      <option value="pending">Pending</option>
                                      <option value="reviewed">Reviewed</option>
                                      <option value="contacted">Contacted</option>
                                      <option value="enrolled">Enrolled</option>
                                    </select>
                                  </td>
                                  <td className="px-5 py-4">
                                    <button onClick={() => deleteInquiry(inq._id)}
                                      className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all">
                                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3.5h10M5 3.5V2h4v1.5M6 6v4M8 6v4M3 3.5l.5 8h7l.5-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )
                    }
                  </div>
                </motion.div>
              )}

              {/* ══ GALLERY ══ */}
              {tab === 'gallery' && (
                <motion.div key="gal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form */}
                    <div className="lg:col-span-1">
                      <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 p-6 shadow-sm sticky top-8">
                        <div className="flex items-center space-x-2 mb-5">
                          <div className="w-1 h-5 bg-gradient-to-b from-[#C8102E] to-[#D6B25E] rounded-full" />
                          <h3 className="text-sm font-black text-gray-900">{galEditId ? 'Edit Image' : 'Add New Image'}</h3>
                        </div>
                        <form onSubmit={saveGallery} className="space-y-4">
                          <div>
                            <Label>Title</Label>
                            <input type="text" value={galForm.title}
                              onChange={e => setGalForm({...galForm, title:e.target.value})}
                              className={inp} placeholder="Optional title" />
                          </div>
                          <div>
                            <Label>Category</Label>
                            <div className="space-y-2">
                              <select value={galForm.category} onChange={e => setGalForm({...galForm, category:e.target.value})} className={inp}>
                                {['General','Campus','Events','Sports','Academics','Other'].map(c => <option key={c}>{c}</option>)}
                              </select>
                              {galForm.category === 'Other' && (
                                <input 
                                  type="text" 
                                  placeholder="Type new category name..." 
                                  className={inp}
                                  onChange={e => setGalForm({...galForm, category: e.target.value})}
                                />
                              )}
                            </div>
                          </div>
                          <div>
                            <Label>Description</Label>
                            <textarea rows={2} value={galForm.description} onChange={e => setGalForm({...galForm, description:e.target.value})} className={`${inp} resize-none`} placeholder="Optional" />
                          </div>
                          <div className="border-t border-[#e8d5a0]/40 pt-4 space-y-3">
                            <div>
                              <Label>Upload File</Label>
                              <input type="file" accept="image/*"
                                onChange={e => {
                                  const f = e.target.files?.[0]; if (!f) return;
                                  const r = new FileReader(); r.onloadend = () => setGalForm({...galForm, imageUrl: r.result as string}); r.readAsDataURL(f);
                                }}
                                className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-[#FDF6E8] file:text-[#C8102E] file:font-bold file:text-xs hover:file:bg-[#f0e4c0] file:transition-colors cursor-pointer" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-px bg-[#e8d5a0]/50" />
                              <span className="text-[10px] text-gray-300 font-medium">or URL</span>
                              <div className="flex-1 h-px bg-[#e8d5a0]/50" />
                            </div>
                            <div>
                              <input type="text" value={galForm.imageUrl} onChange={e => setGalForm({...galForm, imageUrl:e.target.value})} className={inp} placeholder="https://..." />
                            </div>
                            {galForm.imageUrl && (
                              <div className="h-40 rounded-xl overflow-hidden border border-[#e8d5a0]">
                                <img src={galForm.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2 pt-2">
                            <button type="submit" disabled={galBusy}
                              className="flex-1 bg-[#C8102E] hover:bg-[#a80d26] text-white py-3 rounded-xl text-xs font-black transition-all disabled:opacity-50 shadow-md shadow-red-100">
                              {galBusy ? 'Saving…' : galEditId ? 'Update Image' : 'Add to Gallery'}
                            </button>
                            {galEditId && (
                              <button type="button" onClick={() => {setGalEditId(null); setGalForm({title:'',imageUrl:'',category:'General',description:''});}}
                                className="px-4 bg-[#FDF6E8] hover:bg-[#f0e4c0] border border-[#D6B25E]/40 text-gray-600 rounded-xl text-xs font-bold transition-all">
                                Cancel
                              </button>
                            )}
                          </div>
                        </form>

                        {/* Live sync notice */}
                        <div className="mt-5 flex items-start space-x-2 bg-[#FDF6E8] border border-[#D6B25E]/40 rounded-xl px-4 py-3">
                          <span className="text-[#D6B25E] mt-0.5 flex-shrink-0">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M7 4v3.5L9 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                          </span>
                          <div>
                            <p className="text-[10px] font-bold text-gray-700">Live Sync Active</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Images added here instantly reflect on the public gallery page at <span className="text-[#C8102E] font-semibold">/gallery</span></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gallery grid */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-black text-gray-900">{gallery.length} image{gallery.length !== 1 ? 's' : ''} in gallery</p>
                        <a href="/gallery" target="_blank" className="text-[11px] font-bold text-[#C8102E] hover:underline">View public page →</a>
                      </div>
                      {gallery.length === 0
                        ? (
                          <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 shadow-sm">
                            <Empty label="Gallery is empty" sub="Add your first image using the form on the left. It will instantly appear on the /gallery page." />
                          </div>
                        )
                        : (
                          <div className="grid grid-cols-2 gap-4">
                            {gallery.map(item => (
                              <div key={item._id} className="bg-white rounded-2xl border border-[#e8d5a0]/60 overflow-hidden group hover:shadow-md hover:border-[#D6B25E]/60 transition-all shadow-sm">
                                <div className="aspect-video relative overflow-hidden bg-gray-50">
                                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                  <div className="absolute top-2 left-2">
                                    <span className="px-2 py-0.5 bg-white/90 text-[9px] font-black text-[#C8102E] uppercase tracking-widest rounded-lg border border-[#D6B25E]/40">
                                      {item.category}
                                    </span>
                                  </div>
                                </div>
                                <div className="px-4 py-3">
                                  <p className="text-sm font-semibold text-gray-900 truncate">{item.title}</p>
                                  <div className="flex items-center justify-between mt-2">
                                    <button onClick={() => {setGalForm({title:item.title,imageUrl:item.imageUrl,category:item.category,description:item.description}); setGalEditId(item._id); window.scrollTo({top:0});}}
                                      className="text-[11px] font-bold text-gray-400 hover:text-[#C8102E] transition-colors">Edit</button>
                                    <button onClick={() => deleteGal(item._id)}
                                      className="text-[11px] font-bold text-gray-300 hover:text-red-500 transition-colors">Remove</button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )
                      }
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ══ SEO ══ */}
              {tab === 'seo' && (
                <motion.div key="seo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 p-6 shadow-sm">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-1 h-5 bg-gradient-to-b from-[#C8102E] to-[#D6B25E] rounded-full" />
                          <h3 className="text-sm font-black text-gray-900">Configure Page SEO</h3>
                        </div>
                        <p className="text-xs text-gray-400 mb-5 pl-3">Changes load on next page visit.</p>
                        <form onSubmit={saveSEO} className="space-y-4">
                          <div><Label>Page Path *</Label><input type="text" required value={seoForm.pagePath} onChange={e => setSeoForm({...seoForm, pagePath:e.target.value})} className={inp} placeholder="/about" /><p className="text-[10px] text-gray-400 mt-1">e.g. /, /about, /admissions</p></div>
                          <div><Label hint={`${seoForm.title.length}/60`}>Meta Title *</Label><input type="text" required maxLength={60} value={seoForm.title} onChange={e => setSeoForm({...seoForm, title:e.target.value})} className={inp} placeholder="About Us | Mapleford" /></div>
                          <div><Label hint={`${seoForm.description.length}/160`}>Meta Description *</Label><textarea required rows={3} maxLength={160} value={seoForm.description} onChange={e => setSeoForm({...seoForm, description:e.target.value})} className={`${inp} resize-none`} placeholder="Compelling page description…" /></div>
                          <div><Label hint="comma separated">Keywords</Label><input type="text" value={seoForm.keywords||''} onChange={e => setSeoForm({...seoForm, keywords:e.target.value})} className={inp} placeholder="CBSE school Hyderabad" /></div>
                          <div><Label>OG Image URL</Label><input type="text" value={seoForm.ogImage||''} onChange={e => setSeoForm({...seoForm, ogImage:e.target.value})} className={inp} placeholder="https://…/image.jpg" /></div>
                          <button type="submit" className="w-full bg-[#C8102E] hover:bg-[#a80d26] text-white py-3 rounded-xl text-sm font-black transition-all shadow-md shadow-red-100">
                            Save SEO Settings
                          </button>
                          {seoOk && (
                            <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-center">
                              <p className="text-green-600 text-xs font-bold">✓ SEO settings saved!</p>
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-[#e8d5a0]/40 bg-[#FFFDF7]">
                          <h3 className="text-sm font-black text-gray-900">Configured Pages</h3>
                          <p className="text-[10px] text-gray-400 mt-0.5">Click to load into editor</p>
                        </div>
                        {seoList.length === 0
                          ? <Empty label="No pages configured" sub="Use the form to add SEO metadata for your pages." />
                          : seoList.map((s, i) => (
                            <button key={s._id} onClick={() => setSeoForm(s)}
                              className={`w-full px-6 py-4 text-left hover:bg-[#FFFDF7] transition-colors ${i < seoList.length-1 ? 'border-b border-[#e8d5a0]/30' : ''} group`}>
                              <div className="flex items-start justify-between">
                                <div className="flex-1 min-w-0 pr-4">
                                  <code className="text-[11px] font-black text-[#C8102E]">{s.pagePath}</code>
                                  <p className="text-sm font-semibold text-gray-900 mt-0.5 truncate">{s.title}</p>
                                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{s.description}</p>
                                </div>
                                <span className="text-[10px] font-bold text-[#D6B25E] group-hover:text-[#C8102E] transition-colors flex-shrink-0 mt-1">Edit →</span>
                              </div>
                            </button>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ══ BLOGS ══ */}
              {tab === 'blogs' && (
                <motion.div key="bl" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-8 space-y-8">
                  <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 p-6 shadow-sm">
                    <div className="flex items-center space-x-2 mb-5">
                      <div className="w-1 h-5 bg-gradient-to-b from-[#C8102E] to-[#D6B25E] rounded-full" />
                      <h3 className="text-sm font-black text-gray-900">Publish New Article</h3>
                    </div>
                    <form ref={blogRef} onSubmit={publishBlog} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label>Title *</Label><input name="title" required className={inp} placeholder="Article title" /></div>
                        <div><Label>Author *</Label><input name="author" required className={inp} placeholder="Author name" /></div>
                      </div>
                      <div><Label>Content *</Label><textarea name="content" required rows={8} className={`${inp} resize-none`} placeholder="Write your article here…" /></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><Label hint="comma separated">Tags</Label><input name="tags" className={inp} placeholder="education, CBSE" /></div>
                        <div><Label>Featured Image URL</Label><input name="image" className={inp} placeholder="https://…" /></div>
                      </div>
                      <button type="submit" className="px-8 py-3 bg-[#C8102E] hover:bg-[#a80d26] text-white rounded-xl text-sm font-black transition-all shadow-md shadow-red-100">Publish →</button>
                    </form>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">{blogs.length} Article{blogs.length !== 1 ? 's' : ''}</p>
                    {blogs.length === 0
                      ? <div className="bg-white rounded-2xl border border-[#e8d5a0]/60 shadow-sm"><Empty label="No articles yet" sub="Publish your first article using the form above." /></div>
                      : (
                        <div className="space-y-3">
                          {blogs.map(blog => (
                            <div key={blog._id} className="bg-white rounded-2xl border border-[#e8d5a0]/60 p-5 flex items-center space-x-4 hover:border-[#D6B25E]/80 hover:shadow-md transition-all shadow-sm">
                              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#FDF6E8] border border-[#e8d5a0]/60 flex-shrink-0">
                                {blog.featuredImage ? <img src={blog.featuredImage} alt="" className="w-full h-full object-cover" /> :
                                  <div className="w-full h-full flex items-center justify-center text-[#D6B25E] text-lg font-black">✎</div>}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">{blog.title}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5">By {blog.author} · {new Date(blog.createdAt).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</p>
                                {blog.tags?.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-1.5">
                                    {blog.tags.slice(0,3).map(t => (
                                      <span key={t} className="px-2 py-0.5 bg-[#FDF6E8] text-gray-500 border border-[#e8d5a0]/60 rounded text-[9px] font-bold uppercase">{t}</span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <span className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wide ${blog.published ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-50 text-gray-400 border border-gray-200'}`}>
                                {blog.published ? 'Live' : 'Draft'}
                              </span>
                            </div>
                          ))}
                        </div>
                      )
                    }
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          )}
        </main>
      </div>
    </div>
  );
}