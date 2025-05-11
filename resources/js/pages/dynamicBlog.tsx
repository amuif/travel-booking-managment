import { Button } from '@/components/ui/button';
import { TBlogs } from '@/types/blogs';
import { Head } from '@inertiajs/react';
type DynamicBlogProps = {
    blog: TBlogs;
    blogs: TBlogs[];
};
const DynamicBlog = ({ blog, blogs }: DynamicBlogProps) => {
    return (
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-11 px-5">
            <Head title={blog.title} />
            <div className="mx-auto flex w-full flex-col items-center justify-center gap-5 lg:w-[70%]">
                <img src={blog.image} alt={`${blog.title} photo`} className="h-[300px] w-[600px] rounded-xl object-cover" />
                <h3 className="text-center text-2xl font-bold">{blog.title}</h3>
                <p>{blog.body}</p>
            </div>
            <div className="flex gap-5 overflow-hidden">
                {blogs.map((blog) => (
                    <div key={blog.id} className="flex flex-col gap-4">
                        <img src={blog.image} alt={`${blog.title} image`} className="mx-auto h-[200px] w-full rounded-xl object-cover" />
                        <h3 className="line-clamp-1 font-semibold">{blog.title}</h3>
                        <p className="line-clamp-2">{blog.body}</p>
                        <Button
                            onClick={() => {
                                window.location.href = `/blogs/${blog.id}`;
                            }}
                        >
                            Read More
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicBlog;
