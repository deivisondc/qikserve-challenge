"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { CartRemoveConfirmationModal } from "@/components/Cart/CartRemoveConfirmationModal";

import { useMenu } from "../Menu/useMenu";

interface ICartProvider {
  children: ReactNode;
  initialValue?: Partial<ICartContext>;
}

type ModifierItemSelection = {
  id: number;
  name: string;
  price: number;
};

export type ModifierSelection = {
  id: number;
  items: Array<ModifierItemSelection>;
};

interface ItemSelected {
  id: number;
  name: string;
  price: number;
  requiredModifiersAmount: number;
  modifiers?: Array<ModifierSelection>;
  amount: number;
}

export interface ICartItem {
  id: number;
  itemId: number;
  name: string;
  price: number;
  amount: number;
  modifiers?: Array<ModifierItemSelection>;
}

export interface ICartContext {
  cartItems: Array<ICartItem>;
  selectedItem?: ItemSelected;
  selectItem: (sectionId: number, itemId: number) => void;
  resetSelectedItem: () => void;
  updateSelectedItemAmount: (value: number) => void;
  updateSelectedItemModifier: (modifier: ModifierSelection) => void;
  addSelectedItemToCart: () => void;
  updateCartItemAmount: (id: number, amount: number) => void;
  cartTotalPrice: number;
  isCartModalOpen: boolean;
  toggleCartModal: () => void;
}

const CartContext = createContext({} as ICartContext);

const CartProvider = ({ children, initialValue }: ICartProvider) => {
  const { menu } = useMenu();

  const [cartItems, setCartItems] = useState<Array<ICartItem>>(
    initialValue?.cartItems || [],
  );
  const [selectedItem, setSelectedItem] = useState<ItemSelected | undefined>(
    initialValue?.selectedItem,
  );
  const [isCartModalOpen, setIsCartModalOpen] = useState(
    initialValue?.isCartModalOpen || false,
  );

  const [cartItemBeingRemoved, setCartItemBeingRemoved] = useState<ICartItem>();

  const resetSelectedItem = useCallback(() => {
    setSelectedItem(undefined);
  }, []);

  const selectItem = useCallback(
    (sectionId: number, itemId: number) => {
      const itemSection = menu.sections.find(
        (section) => section.id === sectionId,
      );

      if (itemSection) {
        const item = itemSection.items.find((item) => item.id === itemId);

        if (item) {
          setSelectedItem({
            id: item.id,
            name: item.name,
            price: item.price,
            requiredModifiersAmount: item.modifiers ? item.modifiers.length : 0,
            amount: 1,
          });
        }
      }
    },
    [menu.sections],
  );

  const updateSelectedItemAmount = (value: number) => {
    setSelectedItem(
      (state) =>
        state && {
          ...state,
          amount: value,
        },
    );
  };

  const updateSelectedItemModifier = (modifier: ModifierSelection) => {
    if (selectedItem) {
      const otherModifiers =
        selectedItem.modifiers?.filter(
          (registeredModifier) => registeredModifier.id !== modifier.id,
        ) || [];

      setSelectedItem(
        (state) =>
          state && {
            ...state,
            modifiers: [...otherModifiers, modifier],
          },
      );
    }
  };

  const addSelectedItemToCart = () => {
    if (selectedItem) {
      const lastId = cartItems.length ? cartItems[cartItems.length - 1].id : 0;

      const modifierItems = selectedItem.modifiers?.flatMap(
        (modifier) => modifier.items,
      );

      const existingCartItem = cartItems.find((cartItem) => {
        if (
          cartItem.itemId !== selectedItem.id ||
          cartItem.modifiers?.length !== selectedItem.modifiers?.length
        ) {
          return false;
        }

        const cartItemModifierItemsIds = (
          cartItem.modifiers?.flatMap((modifier) => modifier.id) || []
        )
          .sort()
          .join(";");

        const selectedItemModifierItemsIds = (
          modifierItems?.map((modifierItem) => modifierItem.id) || []
        )
          .sort()
          .join(";");

        return (
          cartItem.itemId === selectedItem.id &&
          cartItemModifierItemsIds === selectedItemModifierItemsIds
        );
      });

      if (existingCartItem) {
        updateCartItemAmount(
          existingCartItem.id,
          existingCartItem.amount + selectedItem.amount,
        );
      } else {
        setCartItems((state) => [
          ...state,
          {
            id: lastId + 1,
            itemId: selectedItem.id,
            name: selectedItem.name,
            price: selectedItem.price,
            amount: selectedItem.amount,
            modifiers: modifierItems,
          },
        ]);
      }
    }
  };

  const updateCartItemAmount = (id: number, amount: number) => {
    const updatedCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === id,
    );

    if (updatedCartItemIndex > -1) {
      if (amount === 0) {
        setCartItemBeingRemoved(cartItems[updatedCartItemIndex]);
      }

      const newCartItem = cartItems.map((cartItem, index) => {
        if (index !== updatedCartItemIndex) return cartItem;

        return {
          ...cartItem,
          amount,
        };
      });

      setCartItems(newCartItem);
    }
  };

  const cartTotalPrice = useMemo(() => {
    return cartItems.reduce((acc, cur) => {
      const modifierPrices =
        cur.modifiers?.reduce((modAcc, modCur) => modAcc + modCur.price, 0) ||
        0;

      const itemPrice = (cur.price + modifierPrices) * cur.amount;
      return acc + itemPrice;
    }, 0);
  }, [cartItems]);

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  const handleRemoveItemModalConfirmation = (value: boolean) => {
    if (cartItemBeingRemoved) {
      if (value) {
        setCartItems(
          cartItems.filter(
            (cartItem) => cartItem.id !== cartItemBeingRemoved.id,
          ),
        );
      } else {
        updateCartItemAmount(cartItemBeingRemoved.id, 1);
      }

      setCartItemBeingRemoved(undefined);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        selectedItem,
        selectItem,
        resetSelectedItem,
        updateSelectedItemAmount,
        updateSelectedItemModifier,
        addSelectedItemToCart,
        updateCartItemAmount,
        cartTotalPrice,
        isCartModalOpen,
        toggleCartModal,
      }}
    >
      <CartRemoveConfirmationModal
        isModalOpen={!!cartItemBeingRemoved}
        item={cartItemBeingRemoved}
        handleModalConfirmation={handleRemoveItemModalConfirmation}
      />

      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
