import Link from 'next/link'
import { useState, useEffect } from 'react';

export default function Home({}) {
  const [sort, setSort] = useState(-1);
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      let res = await fetch(`/api/projects`, {
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sort
        })
      });
      let projects = await res.json();
      setProjects(projects);
    }

    getProjects();
  }, [sort]);

  return (
    <>
      <div className="navbar">
        {/* <a href="mailto:naomiclark2004@gmail.com" target="_blank">Contact</a> */}
        <Link href="https://github.com/naomiclark2004" target="_blank">Github</Link>
        <Link href="https://west-mec.edu/coding/" target="_blank">Program</Link>
      </div>
      <div className='header'>
        <div className="profile"></div>
        <div className="content">
          <h2>Naomi Clark</h2>
          <p>West-Mec Coding Student</p>
          <p>Developer and Designer</p>
        </div>
      </div>

      <div className="button">
        <button onClick={() => setSort(-1)} className={sort === -1 ? "button active" : "button"} id="new">Newest</button>
        <button onClick={() => setSort(1)} className={sort === 1 ? "button button2 active" : "button button2"} id="old">Oldest</button>
      </div>

      <div className='container'>
        {projects.length &&
          projects.map((project, index) => {
            let splitDate = project.date.split("-");
            // console.log(splitDate)
            let m = splitDate[1];
            let y = splitDate[0];

            let x = splitDate[2];
            let d = x.split("T");
            d = d[0];

            let date_f = `${m}/${d}/${y}`;
            return (
              <div className='box-item' id={"box" + (index + 1)} key={project._id}>
                <Link
                  href={{
                    pathname: `${project.link}`,
                  }}

                  target="_blank"
                >
                  <div className='box-photo'>
                    <img src={project.src} width="100%" height="100%" alt={project.name}></img>
                  </div>
                </Link>
                <div className='box-content'>
                  <p>{project.name} - {date_f}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}