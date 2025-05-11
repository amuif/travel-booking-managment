import { Button } from '@/components/ui/button';
import { TBlogs } from '@/types/blogs';
import { format } from 'date-fns';

type BlogsProps = {
    data: TBlogs[];
};
const BlogsLanding = ({ data }: BlogsProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 px-5">
            <FeaturedBlog blog={data.at(0)} />
            <p className="w-full px-5 text-left text-xl font-bold">More Blogs</p>
            {data.slice(1).map((blogData) => (
                <div key={blogData.id} className="mx-auto">
                    <BlogCard blog={blogData} />
                </div>
            ))}
        </div>
    );
};

export default BlogsLanding;
type BlogCardProps = {
    blog: TBlogs | undefined;
};
export function FeaturedBlog({ blog }: BlogCardProps) {
    return (
        blog && (
            <div className="flex flex-col gap-5">
                <h4 className="w-full px-5 pb-5 text-left text-xl font-bold">Feature Blog</h4>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-48 w-48">
                        <img src={blog.image} alt={`${blog.title}`} className="aspect-square h-full w-full rounded-xl object-cover" />
                    </div>
                    <div className="flex w-full flex-col gap-4 lg:w-5/6">
                        <div>
                            <h4 className="text-2xl font-bold">{blog.title}</h4>
                        </div>
                        <div>
                            <p className="line-clamp-4">{blog.body}</p>
                        </div>
                        <div className="flex w-full items-center justify-end pr-5">
                            {' '}
                            <Button
                                size="lg"
                                onClick={() => {
                                    window.location.href = `/blogs/${blog.id}`;
                                }}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>{' '}
                </div>
            </div>
        )
    );
}

export function BlogCard({ blog }: BlogCardProps) {
    return (
        blog && (
            <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 bg-[#F0F3F5] p-5 lg:flex-row">
                <div className="w-full lg:w-[10%]">
                    <img src={blog.image} alt={`${blog.title} photo`} className="h-32 w-48 rounded-xl object-cover" />
                </div>
                <div className="top-0 flex w-full flex-col items-start justify-start gap-4 lg:w-[70%]">
                    <h4 className="text-left text-2xl">{blog.title}</h4>
                    <p className="line-clamp-2 w-full">{blog.body}</p>
                </div>
                <div className="flex w-full justify-end gap-3 pr-4 lg:w-[20%] lg:flex-col">
                    <p>{blog.author}</p>
                    <p>{format(blog.date, 'MMM d,yyyy')}</p>
                    <Button
                        onClick={() => {
                            window.location.href = `/blogs/${blog.id}`;
                        }}
                    >
                        Read More
                    </Button>
                </div>
            </div>
        )
    );
}
