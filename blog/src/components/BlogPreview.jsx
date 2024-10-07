const BlogPreview = ({ lesson, handleDelete }) => {
    return (
    <section>
        <h2>{lesson.title}</h2>
        <p>{lesson.author}</p>
        <button className="bg-red-400 text-white" onClick={() => handleDelete(lesson.id)}>
        Delete Lesson
        </button>
    </section>
    );
};

export default BlogPreview;