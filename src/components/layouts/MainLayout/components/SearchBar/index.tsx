import { Combobox, Dialog, Transition } from '@headlessui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import styles from './styles.module.scss';
import { getKeywords, KeywordItem } from '@/services/api/getKeywords';
import IconSearchThin from '@/components/icons/IconSearchThin';
import clsx from 'clsx';
import IconSpinner from '@/components/icons/IconSpinner';

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keywordList, setKeywordList] = useState<KeywordItem[]>([]);
  const [selectedValue, setSelectedValue] = useState<KeywordItem | null>(null);
  const isComponentMounted = useRef(false);

  useEffect(() => {
    isComponentMounted.current = true;

    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (!query || !isComponentMounted.current) return;

      setIsLoading(true);

      try {
        const respGetKeywords = await getKeywords({
          q: query,
          _limit: 20,
        });

        if (!isComponentMounted.current) return;

        if (!respGetKeywords.data) {
          setKeywordList([]);
          return;
        }

        setKeywordList(respGetKeywords.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  const handleInputOnChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, 500);

  return (
    <Combobox
      as="div"
      className={styles.searchBar}
      onChange={(keywordItem: KeywordItem) => {
        setSelectedValue(keywordItem);
        setQuery(keywordItem.keyword);
      }}
      onBlur={() => {
        setKeywordList([]);
      }}
      value={selectedValue}
    >
      <div className={styles.searchForm}>
        <div className={styles.prefixInputIconField}>
          {isLoading ? <IconSpinner /> : <IconSearchThin />}
        </div>

        <Combobox.Input
          className={styles.searchInput}
          placeholder="Keywords..."
          autoComplete="off"
          onChange={debounce((event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value);
          }, 500)}
          defaultValue={query}
          displayValue={() => {
            return query;
          }}
        />
      </div>

      {!isLoading && keywordList.length > 0 && (
        <Combobox.Options className={styles.suggestOptions}>
          {keywordList.map((keywordItem, idx) => {
            return (
              <Combobox.Option
                key={idx}
                value={keywordItem}
                className={({ active }) => {
                  return clsx({
                    [styles.optionItem]: true,
                    [styles.optionItemActived]: active,
                  });
                }}
              >
                <div>{keywordItem.keyword}</div>
              </Combobox.Option>
            );
          })}
        </Combobox.Options>
      )}
    </Combobox>
  );
};

export default SearchBar;
