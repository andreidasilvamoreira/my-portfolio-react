import "./style.css"

export default function CardAbout() {
    const exampleCode = `
<span class="kw">namespace</span>
App\Services; <br /><br /> <span class="kw">class</span> <span class="class">ExampleService</span> <br />&#123; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">private</span> <span class="class">ExampleRepository</span> <span class="repository">$repository;</span> <br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">public function</span> __construct( <span class="class">ExampleRepository</span> $repository) <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="repository this">$this-&gt;</span>repository = <span class="repository">$repository;</span> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125; <br />&nbsp;&#125;
`;
    return (
        <div className="div-about-pai">
            <div className="code-div">
                <div className="rectangle-bg"></div>
                <div className="code-glow-top"></div>
                <div className="circle-bg"></div>
                <div className="code-glow-bottom"></div>
                <div className="about-visual">
                    <pre className="code-card">
                        <code dangerouslySetInnerHTML={{ __html: exampleCode }} />
                    </pre>
                    <div className="linha-icon"></div>
                    <div className="icon-div">
                        <i className="fa-brands fa-php"></i>
                        <i className="fa-solid fa-database"></i>
                        <i className="fa-brands fa-git-alt"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}