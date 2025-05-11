import BlogsLanding from '@/components/custom/blogs/blogsLanding';
import { TBlogs } from '@/types/blogs';
import { Head } from '@inertiajs/react';

type BlogsProps = {
    data: TBlogs[];
};
const Blogs = ({ data }: BlogsProps) => {
    return (
        <div>
            <Head title="Blogs" />
            <BlogsLanding data={data} />
        </div>
    );
};

export default Blogs;
