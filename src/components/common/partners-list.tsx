'use client'

import Image from 'next/image'

interface Partner {
    id: number
    name: string
    logo: string
}

interface PartnerListProps {
    title: string
    partners: Partner[]
}

const PartnerList = ({ title, partners }: PartnerListProps) => {
    return (
        <div className="space-y-6">
            <h3 className="px-5 font-semibold">{title}</h3>

            <div className="flex w-full gap-4 overflow-x-auto px-5 pb-4 [&::-webkit-scrollbar]:hidden">
                {partners.map((partner) => (
                    <div
                        key={partner.name}
                        className="flex min-w-[96px] flex-col items-center sm:min-w-[140px] md:min-w-[180px] lg:min-w-[220px]"
                    >
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-neutral-200 p-4 sm:h-24 sm:w-32 sm:rounded-lg md:h-28 md:w-40 md:rounded-lg lg:h-32 lg:w-52 lg:rounded-lg">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={64}
                                height={64}
                                className="max-h-16 object-contain"
                            />
                        </div>
                        <span className="mt-2 text-center text-sm">
                            {partner.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PartnerList
