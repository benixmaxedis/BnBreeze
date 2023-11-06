'use client';
import Select from 'react-select';
import useCountries from '@/app/hooks/useCountries';
import ReactCountryFlag from 'react-country-flag';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <ReactCountryFlag
              className="w-[1em] h-[1em]"
              countryCode={option.value}
              svg
              aria-label={option.label}
            />
            <div>
              {option.label},
              <span className="text-neutral-800 ml-1">{option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: { ...theme.colors, primary: 'black', primary25: '#ffe4e6' },
        })}
      />
    </div>
  );
}
