import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
const footerLinks = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/in/rutvik1702/' },
  { title: 'Instagram', href: 'https://www.instagram.com/iamrutvik_/' },
  { title: 'Email', href: 'mailto:patelrutvik1702@gmail.com' },
];

export const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <footer className='relative z-0 overflow-x-clip'>
      <div className="absolute h-[400px] w-[2440px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
          <div className='text-white/40'>
            Copyright &copy; {year} Rutvik Patel. All rights reserved.
          </div>
          <nav className='flex flex-col md:flex-row items-center gap-8'>
            {footerLinks.map(link =>
              <a href={link.href} target='_blank' key={link.title} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>
                  {link.title}
                </span>
                <ArrowUpRightIcon className='size-4' />
              </a>
            )}
          </nav>
        </div>
      </div>
    </footer>
  )
};
