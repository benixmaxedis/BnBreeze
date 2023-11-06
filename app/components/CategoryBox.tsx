'use client';
import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

interface CategoryBoxProps {
  label: string;
  description?: string;
  icon: any;
  selected?: boolean;
}

export default function CategoryBox({
  label,
  description,
  icon: Icon,
  selected,
}: CategoryBoxProps) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
      //   console.log('currentQuery', currentQuery);
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      { url: '/', query: updatedQuery },
      { skipNull: true }
    );

    // console.log('url', url);

    router.push(url);
  }, [params, label, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
      ${selected ? 'border-b-neutral-800' : 'border-transparent'}
      ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
}
