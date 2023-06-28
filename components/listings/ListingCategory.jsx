'use client'

const ListingCategory = ({
    icon: Icon,
    label,
    description,

}) => {

    // TODO: for some reason the icon is throwing an error
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                <Icon size={40} className="text-neutral-600" />
                <div className="flex flex-col">
                    <div className="text-lg font-semibold">{label}</div>
                    <div className="bg-neutral-500 font-light">{description}</div>
                </div>
            </div>
            <hr />
            <div className="text-lg font-light text-neutral-500">
                {description }
            </div>
            <hr />


        </div>
    )
};

export default ListingCategory;