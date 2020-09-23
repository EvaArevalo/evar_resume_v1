const langEl = document.querySelector('.language-wrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.language-wrap');

link.forEach(el => {
	el.addEventListener('click', () => {
		langEl.querySelector('/active').classList.remove('active');
		el.classList.add('active')
	});
});

var data = {
	"english" : 
	{
		"intro": "Passionate Machine Learning Researcher striving to incorporate machine learning to the workflow of real-world tasks to expedite the process and render it more efficient. Hands-on experience with state-of-the-art NLP models (<b>BERT</b>) and implementing deep learning models (<b>Tensorflow/PyTorch</b>) for <b> NLP </b> applications; as well as more traditional <b>supervised and unsupervised learning</b> tools. Acquainted with performing classification and more general heuristic tasks through <b>Genetic Algorithms</b> and <b>Pattern Recognition</b> techniques. Experience crawling and processing datasets from Social Media platforms (Twitter). Fundamental understanding of <b> Parallel Programming</b>."
	},
	"chinese" : 
	{
		"intro": "TBD"
	}
}