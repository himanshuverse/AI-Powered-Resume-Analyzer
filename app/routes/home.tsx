import type { Route } from "./+types/home";
import { useEffect  } from "react";
import Navbar from "~/components/Navbar";
import { resumes } from "~/constant";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai resume analyzer" },
    { name: "review your resume", content: "Welcome to Resume Analyzer" },
  ];
}

export default function Home() {
      const {  auth } = usePuterStore();
      
      const navigate = useNavigate();
  
      useEffect(() => {
          if(!auth.isAuthenticated) navigate("/auth?next=/");
      }, [auth.isAuthenticated])
  
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
   <section className="main-section">
    <div className="page-heading">
      <h1>Track your resume rating </h1>
      <h2>Review your submission and check ai-powered feedback</h2>
    </div>
    { resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
   </section>
  </main>;
}
