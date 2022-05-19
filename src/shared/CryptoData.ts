export interface NamePopular {
    Data: any,
    CoinInfo: CoinInfo,
    RAW: USD
}

export interface USD {
    PRICE: number;
    MKTCAP: number;
    CHANGEPCT24HOUR: number;
}

export interface CoinInfo {
    position: number
    Name: string,
    FullName: string
}

export interface AllData {
    position?: number
    FullName?: string,
    Name?: string,
    PRICE?: number;
    MKTCAP?: number;
    CHANGEPCT24HOUR?: number;
}
