import { Breadcrumb } from "../retroui/Breadcrump"

type BreadcrumpProps = {
    links: { title: string, href: string }[];
}

const RetroBreadcrump = ({ links }: BreadcrumpProps) => {

    return (
        <Breadcrumb>
            <Breadcrumb.List>
                {links.map((link, idx) => (
                    <Breadcrumb.Item>
                        {
                            idx === links.length - 1
                                ? <Breadcrumb.Page>{link.title}</Breadcrumb.Page>
                                : <Breadcrumb.Link href={link.href}>{link.title}</Breadcrumb.Link>
                        }
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb.List>
        </Breadcrumb>

    )
}

export default RetroBreadcrump;