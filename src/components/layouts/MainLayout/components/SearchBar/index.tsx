import { Combobox, Dialog, Transition } from '@headlessui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import styles from './styles.module.scss';
import { getKeywords, KeywordItem } from '@/services/api/getKeywords';
import IconSearchThin from '@/components/icons/IconSearchThin';
import clsx from 'clsx';
import IconSpinner from '@/components/icons/IconSpinner';
import IconClose from '@/components/icons/IconClose';

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [keywordList, setKeywordList] = useState<KeywordItem[]>([]);
  const [selectedValue, setSelectedValue] = useState<KeywordItem | null>(null);
  const isComponentMounted = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
          setSelectedValue(null);
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
    setKeywordList([]);
    setSelectedValue(null);
    setQuery(event.target.value);
  }, 300);

  return (
    <form
      className={styles.searchForm}
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Submitted with "${query}"`);
      }}
    >
      <Combobox
        as="div"
        onChange={(keywordItem: KeywordItem) => {
          setSelectedValue(keywordItem);
          setQuery(keywordItem.keyword);
        }}
        value={selectedValue}
      >
        <div className={styles.searchFormInner}>
          <div className={styles.prefixInputIconField}>
            {isLoading ? <IconSpinner /> : <IconSearchThin />}
          </div>

          <Combobox.Input
            ref={inputRef}
            className={clsx(styles.searchInput, {
              [styles.searchInputHasValue]: !!query,
            })}
            placeholder="Search..."
            autoComplete="off"
            onChange={handleInputOnChange}
            defaultValue={query}
            displayValue={() => {
              return query;
            }}
          />
        </div>

        {query && (
          <button
            type="button"
            className={styles.removeBtn}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setQuery('');
              inputRef.current?.focus();
            }}
          >
            <IconClose />
          </button>
        )}

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
    </form>
  );
};

export default SearchBar;
