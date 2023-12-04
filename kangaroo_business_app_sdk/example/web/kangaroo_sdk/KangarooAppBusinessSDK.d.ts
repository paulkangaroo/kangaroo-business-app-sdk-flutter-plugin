type Nullable<T> = T | null | undefined
export declare namespace kangaroorewards.appsdk.core {
    class AuthenticationModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(authScope: string, tokenType: Nullable<string> | undefined, expiresIn: Nullable<number> | undefined, accessToken: Nullable<string>, refreshToken?: Nullable<string>);
        get authScope(): string;
        get tokenType(): Nullable<string>;
        get expiresIn(): Nullable<number>;
        get accessToken(): Nullable<string>;
        get refreshToken(): Nullable<string>;
        copy(authScope?: string, tokenType?: Nullable<string>, expiresIn?: Nullable<number>, accessToken?: Nullable<string>, refreshToken?: Nullable<string>): kangaroorewards.appsdk.core.AuthenticationModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            get ACCESS_TOKEN(): string;
            get REFRESH_TOKEN(): string;
            get AUTH_SCOPE(): string;
        };
    }
}
export declare namespace kangaroorewards.appsdk.core.network.base {
    class UserReAuthenticationModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(tokenType: Nullable<string> | undefined, expiresIn: Nullable<number> | undefined, accessToken: Nullable<string>, refreshToken?: Nullable<string>);
        get tokenType(): Nullable<string>;
        get expiresIn(): Nullable<number>;
        get accessToken(): Nullable<string>;
        get refreshToken(): Nullable<string>;
        copy(tokenType?: Nullable<string>, expiresIn?: Nullable<number>, accessToken?: Nullable<string>, refreshToken?: Nullable<string>): kangaroorewards.appsdk.core.network.base.UserReAuthenticationModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            get ACCESS_TOKEN(): string;
            get REFRESH_TOKEN(): string;
        };
    }
}
export declare namespace kangaroorewards.js.appsdk {
    class KangarooSdk {
        constructor();
        initialize(applicationKey: string, clientId: string, clientSecret: string, environment: string | undefined, isDebug: boolean): void;
        setPreferredLanguage(preferredLanguage: string): void;
        getPreferredLanguage(): Nullable<string>;
        getSession(): Nullable<string>;
        killSession(): void;
    }
}
export declare namespace features.businessActiveOffers.models {
    class BusinessOffersModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.businessActiveOffers.models.OfferModel> */);
        get data(): any/* kotlin.collections.List<features.businessActiveOffers.models.OfferModel> */;
        copy(data?: any/* kotlin.collections.List<features.businessActiveOffers.models.OfferModel> */): features.businessActiveOffers.models.BusinessOffersModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveOffers.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessActiveOffers.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveOffers.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessActiveOffers.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveOffers.models {
    class OfferModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: number, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, couponConvertible: Nullable<boolean>, realValue: Nullable<number>, discountValue: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, appsOnly: Nullable<boolean>, offerFrequencyId: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom: Nullable<string>, peakTo: Nullable<string>, type: Nullable<string>, typeId: Nullable<number>, targetedOfferFlag: Nullable<number>, priority: Nullable<number>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveOffers.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveOffers.models.OfferTranslation>> */, couponAutoGet: Nullable<boolean>, couponPermAvailable: Nullable<boolean>, couponExpiresIn: Nullable<number>, displaysIn: Nullable<number>);
        get id(): number;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get couponConvertible(): Nullable<boolean>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get offerFrequencyId(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get peakFrom(): Nullable<string>;
        get peakTo(): Nullable<string>;
        get type(): Nullable<string>;
        get typeId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get priority(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveOffers.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveOffers.models.OfferTranslation>> */;
        get couponAutoGet(): Nullable<boolean>;
        get couponPermAvailable(): Nullable<boolean>;
        get couponExpiresIn(): Nullable<number>;
        get displaysIn(): Nullable<number>;
        copy(id?: number, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, couponConvertible?: Nullable<boolean>, realValue?: Nullable<number>, discountValue?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, appsOnly?: Nullable<boolean>, offerFrequencyId?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom?: Nullable<string>, peakTo?: Nullable<string>, type?: Nullable<string>, typeId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, priority?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveOffers.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveOffers.models.OfferTranslation>> */, couponAutoGet?: Nullable<boolean>, couponPermAvailable?: Nullable<boolean>, couponExpiresIn?: Nullable<number>, displaysIn?: Nullable<number>): features.businessActiveOffers.models.OfferModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveOffers.models {
    class OfferTranslation {
        constructor(id: number, languageId: Nullable<number>, offerTitle: Nullable<string>, offerDescription: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>, couponTitle: Nullable<string>, couponDescription: Nullable<string>, couponTermsConditions: Nullable<string>, couponLink: Nullable<string>, couponAvailableAt: Nullable<string>, language: Nullable<features.businessActiveOffers.models.Language>);
        get id(): number;
        get languageId(): Nullable<number>;
        get offerTitle(): Nullable<string>;
        get offerDescription(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        get couponTitle(): Nullable<string>;
        get couponDescription(): Nullable<string>;
        get couponTermsConditions(): Nullable<string>;
        get couponLink(): Nullable<string>;
        get couponAvailableAt(): Nullable<string>;
        get language(): Nullable<features.businessActiveOffers.models.Language>;
        copy(id?: number, languageId?: Nullable<number>, offerTitle?: Nullable<string>, offerDescription?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>, couponTitle?: Nullable<string>, couponDescription?: Nullable<string>, couponTermsConditions?: Nullable<string>, couponLink?: Nullable<string>, couponAvailableAt?: Nullable<string>, language?: Nullable<features.businessActiveOffers.models.Language>): features.businessActiveOffers.models.OfferTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveRewards.models {
    class BusinessRewardsModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.businessActiveRewards.models.RewardModel> */);
        get data(): any/* kotlin.collections.List<features.businessActiveRewards.models.RewardModel> */;
        copy(data?: any/* kotlin.collections.List<features.businessActiveRewards.models.RewardModel> */): features.businessActiveRewards.models.BusinessRewardsModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveRewards.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessActiveRewards.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveRewards.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessActiveRewards.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveRewards.models {
    class RewardModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: Nullable<number>, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, amount: Nullable<number>, realValue: Nullable<number>, discountValue: Nullable<number>, partnerReward: Nullable<boolean>, partnerRewardType: Nullable<number>, redeemForGiftCard: Nullable<boolean>, type: Nullable<string>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveRewards.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, rewardLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveRewards.models.RewardTranslation>> */);
        get id(): Nullable<number>;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get amount(): Nullable<number>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get partnerReward(): Nullable<boolean>;
        get partnerRewardType(): Nullable<number>;
        get redeemForGiftCard(): Nullable<boolean>;
        get type(): Nullable<string>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveRewards.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get rewardLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveRewards.models.RewardTranslation>> */;
        copy(id?: Nullable<number>, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, amount?: Nullable<number>, realValue?: Nullable<number>, discountValue?: Nullable<number>, partnerReward?: Nullable<boolean>, partnerRewardType?: Nullable<number>, redeemForGiftCard?: Nullable<boolean>, type?: Nullable<string>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveRewards.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, rewardLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessActiveRewards.models.RewardTranslation>> */): features.businessActiveRewards.models.RewardModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessActiveRewards.models {
    class RewardTranslation {
        constructor(id: Nullable<number>, languageId: Nullable<number>, title: Nullable<string>, description: Nullable<string>, termsConditions: Nullable<string>, link: Nullable<string>, language: Nullable<features.businessActiveRewards.models.Language>, note: Nullable<string>);
        get id(): Nullable<number>;
        get languageId(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get language(): Nullable<features.businessActiveRewards.models.Language>;
        get note(): Nullable<string>;
        copy(id?: Nullable<number>, languageId?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, termsConditions?: Nullable<string>, link?: Nullable<string>, language?: Nullable<features.businessActiveRewards.models.Language>, note?: Nullable<string>): features.businessActiveRewards.models.RewardTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveOffers.models {
    class BusinessOffersModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.businessInActiveOffers.models.OfferModel> */);
        get data(): any/* kotlin.collections.List<features.businessInActiveOffers.models.OfferModel> */;
        copy(data?: any/* kotlin.collections.List<features.businessInActiveOffers.models.OfferModel> */): features.businessInActiveOffers.models.BusinessOffersModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveOffers.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessInActiveOffers.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveOffers.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessInActiveOffers.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveOffers.models {
    class OfferModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: number, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, couponConvertible: Nullable<boolean>, realValue: Nullable<number>, discountValue: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, appsOnly: Nullable<boolean>, offerFrequencyId: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom: Nullable<string>, peakTo: Nullable<string>, type: Nullable<string>, typeId: Nullable<number>, targetedOfferFlag: Nullable<number>, priority: Nullable<number>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveOffers.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveOffers.models.OfferTranslation>> */, couponAutoGet: Nullable<boolean>, couponPermAvailable: Nullable<boolean>, couponExpiresIn: Nullable<number>, displaysIn: Nullable<number>);
        get id(): number;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get couponConvertible(): Nullable<boolean>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get offerFrequencyId(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get peakFrom(): Nullable<string>;
        get peakTo(): Nullable<string>;
        get type(): Nullable<string>;
        get typeId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get priority(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveOffers.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveOffers.models.OfferTranslation>> */;
        get couponAutoGet(): Nullable<boolean>;
        get couponPermAvailable(): Nullable<boolean>;
        get couponExpiresIn(): Nullable<number>;
        get displaysIn(): Nullable<number>;
        copy(id?: number, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, couponConvertible?: Nullable<boolean>, realValue?: Nullable<number>, discountValue?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, appsOnly?: Nullable<boolean>, offerFrequencyId?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom?: Nullable<string>, peakTo?: Nullable<string>, type?: Nullable<string>, typeId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, priority?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveOffers.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveOffers.models.OfferTranslation>> */, couponAutoGet?: Nullable<boolean>, couponPermAvailable?: Nullable<boolean>, couponExpiresIn?: Nullable<number>, displaysIn?: Nullable<number>): features.businessInActiveOffers.models.OfferModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveOffers.models {
    class OfferTranslation {
        constructor(id: number, languageId: Nullable<number>, offerTitle: Nullable<string>, offerDescription: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>, couponTitle: Nullable<string>, couponDescription: Nullable<string>, couponTermsConditions: Nullable<string>, couponLink: Nullable<string>, couponAvailableAt: Nullable<string>, language: Nullable<features.businessInActiveOffers.models.Language>);
        get id(): number;
        get languageId(): Nullable<number>;
        get offerTitle(): Nullable<string>;
        get offerDescription(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        get couponTitle(): Nullable<string>;
        get couponDescription(): Nullable<string>;
        get couponTermsConditions(): Nullable<string>;
        get couponLink(): Nullable<string>;
        get couponAvailableAt(): Nullable<string>;
        get language(): Nullable<features.businessInActiveOffers.models.Language>;
        copy(id?: number, languageId?: Nullable<number>, offerTitle?: Nullable<string>, offerDescription?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>, couponTitle?: Nullable<string>, couponDescription?: Nullable<string>, couponTermsConditions?: Nullable<string>, couponLink?: Nullable<string>, couponAvailableAt?: Nullable<string>, language?: Nullable<features.businessInActiveOffers.models.Language>): features.businessInActiveOffers.models.OfferTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveRewards.models {
    class BusinessRewardsModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.businessInActiveRewards.models.RewardModel> */);
        get data(): any/* kotlin.collections.List<features.businessInActiveRewards.models.RewardModel> */;
        copy(data?: any/* kotlin.collections.List<features.businessInActiveRewards.models.RewardModel> */): features.businessInActiveRewards.models.BusinessRewardsModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveRewards.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessInActiveRewards.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveRewards.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessInActiveRewards.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveRewards.models {
    class RewardModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: Nullable<number>, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, amount: Nullable<number>, realValue: Nullable<number>, discountValue: Nullable<number>, partnerReward: Nullable<boolean>, partnerRewardType: Nullable<number>, redeemForGiftCard: Nullable<boolean>, type: Nullable<string>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveRewards.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, rewardLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveRewards.models.RewardTranslation>> */);
        get id(): Nullable<number>;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get amount(): Nullable<number>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get partnerReward(): Nullable<boolean>;
        get partnerRewardType(): Nullable<number>;
        get redeemForGiftCard(): Nullable<boolean>;
        get type(): Nullable<string>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveRewards.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get rewardLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveRewards.models.RewardTranslation>> */;
        copy(id?: Nullable<number>, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, amount?: Nullable<number>, realValue?: Nullable<number>, discountValue?: Nullable<number>, partnerReward?: Nullable<boolean>, partnerRewardType?: Nullable<number>, redeemForGiftCard?: Nullable<boolean>, type?: Nullable<string>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveRewards.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, rewardLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessInActiveRewards.models.RewardTranslation>> */): features.businessInActiveRewards.models.RewardModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessInActiveRewards.models {
    class RewardTranslation {
        constructor(id: Nullable<number>, languageId: Nullable<number>, title: Nullable<string>, description: Nullable<string>, termsConditions: Nullable<string>, link: Nullable<string>, language: Nullable<features.businessInActiveRewards.models.Language>, note: Nullable<string>);
        get id(): Nullable<number>;
        get languageId(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get language(): Nullable<features.businessInActiveRewards.models.Language>;
        get note(): Nullable<string>;
        copy(id?: Nullable<number>, languageId?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, termsConditions?: Nullable<string>, link?: Nullable<string>, language?: Nullable<features.businessInActiveRewards.models.Language>, note?: Nullable<string>): features.businessInActiveRewards.models.RewardTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOfferById.models {
    class BusinessOfferByIdModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: features.businessOfferById.models.OfferModel);
        get data(): features.businessOfferById.models.OfferModel;
        copy(data?: features.businessOfferById.models.OfferModel): features.businessOfferById.models.BusinessOfferByIdModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOfferById.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessOfferById.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOfferById.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessOfferById.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOfferById.models {
    class OfferModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: number, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, couponConvertible: Nullable<boolean>, realValue: Nullable<number>, discountValue: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, appsOnly: Nullable<boolean>, offerFrequencyId: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom: Nullable<string>, peakTo: Nullable<string>, type: Nullable<string>, typeId: Nullable<number>, targetedOfferFlag: Nullable<number>, priority: Nullable<number>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOfferById.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOfferById.models.OfferTranslation>> */, couponAutoGet: Nullable<boolean>, couponPermAvailable: Nullable<boolean>, couponExpiresIn: Nullable<number>, displaysIn: Nullable<number>);
        get id(): number;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get couponConvertible(): Nullable<boolean>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get offerFrequencyId(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get peakFrom(): Nullable<string>;
        get peakTo(): Nullable<string>;
        get type(): Nullable<string>;
        get typeId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get priority(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessOfferById.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessOfferById.models.OfferTranslation>> */;
        get couponAutoGet(): Nullable<boolean>;
        get couponPermAvailable(): Nullable<boolean>;
        get couponExpiresIn(): Nullable<number>;
        get displaysIn(): Nullable<number>;
        copy(id?: number, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, couponConvertible?: Nullable<boolean>, realValue?: Nullable<number>, discountValue?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, appsOnly?: Nullable<boolean>, offerFrequencyId?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom?: Nullable<string>, peakTo?: Nullable<string>, type?: Nullable<string>, typeId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, priority?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOfferById.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOfferById.models.OfferTranslation>> */, couponAutoGet?: Nullable<boolean>, couponPermAvailable?: Nullable<boolean>, couponExpiresIn?: Nullable<number>, displaysIn?: Nullable<number>): features.businessOfferById.models.OfferModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOfferById.models {
    class OfferTranslation {
        constructor(id: number, languageId: Nullable<number>, offerTitle: Nullable<string>, offerDescription: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>, couponTitle: Nullable<string>, couponDescription: Nullable<string>, couponTermsConditions: Nullable<string>, couponLink: Nullable<string>, couponAvailableAt: Nullable<string>, language: Nullable<features.businessOfferById.models.Language>);
        get id(): number;
        get languageId(): Nullable<number>;
        get offerTitle(): Nullable<string>;
        get offerDescription(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        get couponTitle(): Nullable<string>;
        get couponDescription(): Nullable<string>;
        get couponTermsConditions(): Nullable<string>;
        get couponLink(): Nullable<string>;
        get couponAvailableAt(): Nullable<string>;
        get language(): Nullable<features.businessOfferById.models.Language>;
        copy(id?: number, languageId?: Nullable<number>, offerTitle?: Nullable<string>, offerDescription?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>, couponTitle?: Nullable<string>, couponDescription?: Nullable<string>, couponTermsConditions?: Nullable<string>, couponLink?: Nullable<string>, couponAvailableAt?: Nullable<string>, language?: Nullable<features.businessOfferById.models.Language>): features.businessOfferById.models.OfferTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOffers.models {
    class BusinessOffersModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.businessOffers.models.OfferModel> */);
        get data(): any/* kotlin.collections.List<features.businessOffers.models.OfferModel> */;
        copy(data?: any/* kotlin.collections.List<features.businessOffers.models.OfferModel> */): features.businessOffers.models.BusinessOffersModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOffers.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessOffers.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOffers.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessOffers.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOffers.models {
    class OfferModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: number, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, couponConvertible: Nullable<boolean>, realValue: Nullable<number>, discountValue: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, appsOnly: Nullable<boolean>, offerFrequencyId: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom: Nullable<string>, peakTo: Nullable<string>, type: Nullable<string>, typeId: Nullable<number>, targetedOfferFlag: Nullable<number>, priority: Nullable<number>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOffers.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOffers.models.OfferTranslation>> */);
        get id(): number;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get couponConvertible(): Nullable<boolean>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get offerFrequencyId(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get peakFrom(): Nullable<string>;
        get peakTo(): Nullable<string>;
        get type(): Nullable<string>;
        get typeId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get priority(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessOffers.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessOffers.models.OfferTranslation>> */;
        copy(id?: number, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, couponConvertible?: Nullable<boolean>, realValue?: Nullable<number>, discountValue?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, appsOnly?: Nullable<boolean>, offerFrequencyId?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom?: Nullable<string>, peakTo?: Nullable<string>, type?: Nullable<string>, typeId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, priority?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOffers.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessOffers.models.OfferTranslation>> */): features.businessOffers.models.OfferModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessOffers.models {
    class OfferTranslation {
        constructor(id: number, languageId: Nullable<number>, offerTitle: Nullable<string>, offerDescription: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>, couponTitle: Nullable<string>, couponDescription: Nullable<string>, couponTermsConditions: Nullable<string>, couponLink: Nullable<string>, couponAvailableAt: Nullable<string>, language: Nullable<features.businessOffers.models.Language>);
        get id(): number;
        get languageId(): Nullable<number>;
        get offerTitle(): Nullable<string>;
        get offerDescription(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        get couponTitle(): Nullable<string>;
        get couponDescription(): Nullable<string>;
        get couponTermsConditions(): Nullable<string>;
        get couponLink(): Nullable<string>;
        get couponAvailableAt(): Nullable<string>;
        get language(): Nullable<features.businessOffers.models.Language>;
        copy(id?: number, languageId?: Nullable<number>, offerTitle?: Nullable<string>, offerDescription?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>, couponTitle?: Nullable<string>, couponDescription?: Nullable<string>, couponTermsConditions?: Nullable<string>, couponLink?: Nullable<string>, couponAvailableAt?: Nullable<string>, language?: Nullable<features.businessOffers.models.Language>): features.businessOffers.models.OfferTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewardById.models {
    class BusinessRewardByIdModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: features.businessRewardById.models.RewardModel);
        get data(): features.businessRewardById.models.RewardModel;
        copy(data?: features.businessRewardById.models.RewardModel): features.businessRewardById.models.BusinessRewardByIdModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewardById.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessRewardById.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewardById.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessRewardById.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewardById.models {
    class RewardModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: Nullable<number>, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, amount: Nullable<number>, realValue: Nullable<number>, discountValue: Nullable<number>, partnerReward: Nullable<boolean>, partnerRewardType: Nullable<number>, redeemForGiftCard: Nullable<boolean>, type: Nullable<string>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewardById.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, rewardLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewardById.models.RewardTranslation>> */);
        get id(): Nullable<number>;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get amount(): Nullable<number>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get partnerReward(): Nullable<boolean>;
        get partnerRewardType(): Nullable<number>;
        get redeemForGiftCard(): Nullable<boolean>;
        get type(): Nullable<string>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewardById.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get rewardLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewardById.models.RewardTranslation>> */;
        copy(id?: Nullable<number>, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, amount?: Nullable<number>, realValue?: Nullable<number>, discountValue?: Nullable<number>, partnerReward?: Nullable<boolean>, partnerRewardType?: Nullable<number>, redeemForGiftCard?: Nullable<boolean>, type?: Nullable<string>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewardById.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, rewardLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewardById.models.RewardTranslation>> */): features.businessRewardById.models.RewardModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewardById.models {
    class RewardTranslation {
        constructor(id: Nullable<number>, languageId: Nullable<number>, title: Nullable<string>, description: Nullable<string>, termsConditions: Nullable<string>, link: Nullable<string>, language: Nullable<features.businessRewardById.models.Language>, note: Nullable<string>);
        get id(): Nullable<number>;
        get languageId(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get language(): Nullable<features.businessRewardById.models.Language>;
        get note(): Nullable<string>;
        copy(id?: Nullable<number>, languageId?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, termsConditions?: Nullable<string>, link?: Nullable<string>, language?: Nullable<features.businessRewardById.models.Language>, note?: Nullable<string>): features.businessRewardById.models.RewardTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewards.models {
    class BusinessRewardsModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.businessRewards.models.RewardModel> */);
        get data(): any/* kotlin.collections.List<features.businessRewards.models.RewardModel> */;
        copy(data?: any/* kotlin.collections.List<features.businessRewards.models.RewardModel> */): features.businessRewards.models.BusinessRewardsModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewards.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.businessRewards.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewards.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.businessRewards.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewards.models {
    class RewardModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: Nullable<number>, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, amount: Nullable<number>, realValue: Nullable<number>, discountValue: Nullable<number>, partnerReward: Nullable<boolean>, partnerRewardType: Nullable<number>, redeemForGiftCard: Nullable<boolean>, type: Nullable<string>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewards.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, rewardLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewards.models.RewardTranslation>> */);
        get id(): Nullable<number>;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get amount(): Nullable<number>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get partnerReward(): Nullable<boolean>;
        get partnerRewardType(): Nullable<number>;
        get redeemForGiftCard(): Nullable<boolean>;
        get type(): Nullable<string>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewards.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get rewardLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewards.models.RewardTranslation>> */;
        copy(id?: Nullable<number>, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, amount?: Nullable<number>, realValue?: Nullable<number>, discountValue?: Nullable<number>, partnerReward?: Nullable<boolean>, partnerRewardType?: Nullable<number>, redeemForGiftCard?: Nullable<boolean>, type?: Nullable<string>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewards.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, rewardLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.businessRewards.models.RewardTranslation>> */): features.businessRewards.models.RewardModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRewards.models {
    class RewardTranslation {
        constructor(id: Nullable<number>, languageId: Nullable<number>, title: Nullable<string>, description: Nullable<string>, termsConditions: Nullable<string>, link: Nullable<string>, language: Nullable<features.businessRewards.models.Language>, note: Nullable<string>);
        get id(): Nullable<number>;
        get languageId(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get language(): Nullable<features.businessRewards.models.Language>;
        get note(): Nullable<string>;
        copy(id?: Nullable<number>, languageId?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, termsConditions?: Nullable<string>, link?: Nullable<string>, language?: Nullable<features.businessRewards.models.Language>, note?: Nullable<string>): features.businessRewards.models.RewardTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRules.models {
    class BusinessRulesData {
        constructor(earning: Nullable<features.businessRules.models.EarningRules>, redeeming: Nullable<features.businessRules.models.RedeemingRules>, currency: Nullable<features.businessRules.models.CurrencyRules>);
        get earning(): Nullable<features.businessRules.models.EarningRules>;
        get redeeming(): Nullable<features.businessRules.models.RedeemingRules>;
        get currency(): Nullable<features.businessRules.models.CurrencyRules>;
        copy(earning?: Nullable<features.businessRules.models.EarningRules>, redeeming?: Nullable<features.businessRules.models.RedeemingRules>, currency?: Nullable<features.businessRules.models.CurrencyRules>): features.businessRules.models.BusinessRulesData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRules.models {
    class BusinessesRules /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: Nullable<features.businessRules.models.BusinessRulesData>);
        get data(): Nullable<features.businessRules.models.BusinessRulesData>;
        copy(data?: Nullable<features.businessRules.models.BusinessRulesData>): features.businessRules.models.BusinessesRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRules.models {
    class CurrencyRules {
        constructor(name: Nullable<string>, symbol: Nullable<string>, isoCode: Nullable<string>, denominator: Nullable<number>);
        get name(): Nullable<string>;
        get symbol(): Nullable<string>;
        get isoCode(): Nullable<string>;
        get denominator(): Nullable<number>;
        copy(name?: Nullable<string>, symbol?: Nullable<string>, isoCode?: Nullable<string>, denominator?: Nullable<number>): features.businessRules.models.CurrencyRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRules.models {
    class EarningRules {
        constructor(rewardRatio: Nullable<number>, rewardAmount: Nullable<number>, rewardPoints: Nullable<number>, socialMedia: Nullable<features.businessRules.models.SocialMediaRules>, rewardMilestoneAmount: Nullable<number>, welcomePoints: Nullable<number>);
        get rewardRatio(): Nullable<number>;
        get rewardAmount(): Nullable<number>;
        get rewardPoints(): Nullable<number>;
        get socialMedia(): Nullable<features.businessRules.models.SocialMediaRules>;
        get rewardMilestoneAmount(): Nullable<number>;
        get welcomePoints(): Nullable<number>;
        copy(rewardRatio?: Nullable<number>, rewardAmount?: Nullable<number>, rewardPoints?: Nullable<number>, socialMedia?: Nullable<features.businessRules.models.SocialMediaRules>, rewardMilestoneAmount?: Nullable<number>, welcomePoints?: Nullable<number>): features.businessRules.models.EarningRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRules.models {
    class RedeemingRules {
        constructor(redemptionRatio: Nullable<number>, redemptionAmount: Nullable<number>);
        get redemptionRatio(): Nullable<number>;
        get redemptionAmount(): Nullable<number>;
        copy(redemptionRatio?: Nullable<number>, redemptionAmount?: Nullable<number>): features.businessRules.models.RedeemingRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.businessRules.models {
    class SocialMediaRules {
        constructor(active: Nullable<boolean>, rewardPoints: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, rewardPointsMax: Nullable<number>);
        get active(): Nullable<boolean>;
        get rewardPoints(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get rewardPointsMax(): Nullable<number>;
        copy(active?: Nullable<boolean>, rewardPoints?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, rewardPointsMax?: Nullable<number>): features.businessRules.models.SocialMediaRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class BranchIds {
        constructor(id: Nullable<string>);
        get id(): Nullable<string>;
        copy(id?: Nullable<string>): features.createBusinessOffer.models.BranchIds;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class CreateOfferRequestModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(typeId: Nullable<number>, offerFrequencyId: Nullable<number>, targetedOfferFlag: Nullable<number>, neverExpiresFlag: Nullable<number>, discountValue: Nullable<number>, realValue: Nullable<number>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.OfferRequestLanguages>> */, images: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.Images>> */, availableAtBranches: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.BranchIds>> */, couponAutoGet: Nullable<number>, couponPermAvailable: Nullable<number>, couponConvertible: Nullable<number>, couponExpiresIn: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<number>> */, points: Nullable<number>, appsOnly: Nullable<boolean>, displaysIn: Nullable<number>);
        get typeId(): Nullable<number>;
        get offerFrequencyId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get neverExpiresFlag(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get realValue(): Nullable<number>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.OfferRequestLanguages>> */;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.Images>> */;
        get availableAtBranches(): Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.BranchIds>> */;
        get couponAutoGet(): Nullable<number>;
        get couponPermAvailable(): Nullable<number>;
        get couponConvertible(): Nullable<number>;
        get couponExpiresIn(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<number>> */;
        get points(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get displaysIn(): Nullable<number>;
        copy(typeId?: Nullable<number>, offerFrequencyId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, neverExpiresFlag?: Nullable<number>, discountValue?: Nullable<number>, realValue?: Nullable<number>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.OfferRequestLanguages>> */, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.Images>> */, availableAtBranches?: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.BranchIds>> */, couponAutoGet?: Nullable<number>, couponPermAvailable?: Nullable<number>, couponConvertible?: Nullable<number>, couponExpiresIn?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<number>> */, points?: Nullable<number>, appsOnly?: Nullable<boolean>, displaysIn?: Nullable<number>): features.createBusinessOffer.models.CreateOfferRequestModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class CreateOfferResponseModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: features.createBusinessOffer.models.OfferModel);
        get data(): features.createBusinessOffer.models.OfferModel;
        copy(data?: features.createBusinessOffer.models.OfferModel): features.createBusinessOffer.models.CreateOfferResponseModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.createBusinessOffer.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class Images {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, original: Nullable<string>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get original(): Nullable<string>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, original?: Nullable<string>): features.createBusinessOffer.models.Images;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.createBusinessOffer.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class OfferModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: number, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, couponConvertible: Nullable<boolean>, realValue: Nullable<number>, discountValue: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, appsOnly: Nullable<boolean>, offerFrequencyId: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom: Nullable<string>, peakTo: Nullable<string>, type: Nullable<string>, typeId: Nullable<number>, targetedOfferFlag: Nullable<number>, priority: Nullable<number>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.OfferTranslation>> */, couponAutoGet: Nullable<boolean>, couponPermAvailable: Nullable<boolean>, couponExpiresIn: Nullable<number>, displaysIn: Nullable<number>);
        get id(): number;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get couponConvertible(): Nullable<boolean>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get offerFrequencyId(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get peakFrom(): Nullable<string>;
        get peakTo(): Nullable<string>;
        get type(): Nullable<string>;
        get typeId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get priority(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.OfferTranslation>> */;
        get couponAutoGet(): Nullable<boolean>;
        get couponPermAvailable(): Nullable<boolean>;
        get couponExpiresIn(): Nullable<number>;
        get displaysIn(): Nullable<number>;
        copy(id?: number, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, couponConvertible?: Nullable<boolean>, realValue?: Nullable<number>, discountValue?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, appsOnly?: Nullable<boolean>, offerFrequencyId?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom?: Nullable<string>, peakTo?: Nullable<string>, type?: Nullable<string>, typeId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, priority?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.createBusinessOffer.models.OfferTranslation>> */, couponAutoGet?: Nullable<boolean>, couponPermAvailable?: Nullable<boolean>, couponExpiresIn?: Nullable<number>, displaysIn?: Nullable<number>): features.createBusinessOffer.models.OfferModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class OfferRequestLanguages {
        constructor(languageId: Nullable<number>, title: Nullable<string>, description: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>);
        get languageId(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        copy(languageId?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>): features.createBusinessOffer.models.OfferRequestLanguages;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.createBusinessOffer.models {
    class OfferTranslation {
        constructor(id: number, languageId: Nullable<number>, offerTitle: Nullable<string>, offerDescription: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>, couponTitle: Nullable<string>, couponDescription: Nullable<string>, couponTermsConditions: Nullable<string>, couponLink: Nullable<string>, couponAvailableAt: Nullable<string>, language: Nullable<features.createBusinessOffer.models.Language>);
        get id(): number;
        get languageId(): Nullable<number>;
        get offerTitle(): Nullable<string>;
        get offerDescription(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        get couponTitle(): Nullable<string>;
        get couponDescription(): Nullable<string>;
        get couponTermsConditions(): Nullable<string>;
        get couponLink(): Nullable<string>;
        get couponAvailableAt(): Nullable<string>;
        get language(): Nullable<features.createBusinessOffer.models.Language>;
        copy(id?: number, languageId?: Nullable<number>, offerTitle?: Nullable<string>, offerDescription?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>, couponTitle?: Nullable<string>, couponDescription?: Nullable<string>, couponTermsConditions?: Nullable<string>, couponLink?: Nullable<string>, couponAvailableAt?: Nullable<string>, language?: Nullable<features.createBusinessOffer.models.Language>): features.createBusinessOffer.models.OfferTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.deleteOfferById.models {
    class DeleteResult {
        constructor();
        static get Companion(): {
        };
    }
}
export declare namespace features.deleteRewardById.models {
    class DeleteResult {
        constructor();
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class BranchAddress {
        constructor(formatted: Nullable<string>, street: Nullable<string>, city: Nullable<string>, region: Nullable<string>, country: Nullable<string>, lat: Nullable<number>, long: Nullable<number>);
        get formatted(): Nullable<string>;
        get street(): Nullable<string>;
        get city(): Nullable<string>;
        get region(): Nullable<string>;
        get country(): Nullable<string>;
        get lat(): Nullable<number>;
        get long(): Nullable<number>;
        copy(formatted?: Nullable<string>, street?: Nullable<string>, city?: Nullable<string>, region?: Nullable<string>, country?: Nullable<string>, lat?: Nullable<number>, long?: Nullable<number>): features.getUserDetails.models.BranchAddress;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class BranchModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: string, name: Nullable<string>, webSite: Nullable<string>, phone: Nullable<features.getUserDetails.models.BranchPhone>, logo: Nullable<features.getUserDetails.models.Image>, coverPhoto: Nullable<features.getUserDetails.models.Image>, address: Nullable<features.getUserDetails.models.BranchAddress>, virtualBranchFlag: Nullable<boolean>);
        get id(): string;
        get name(): Nullable<string>;
        get webSite(): Nullable<string>;
        get phone(): Nullable<features.getUserDetails.models.BranchPhone>;
        get logo(): Nullable<features.getUserDetails.models.Image>;
        get coverPhoto(): Nullable<features.getUserDetails.models.Image>;
        get address(): Nullable<features.getUserDetails.models.BranchAddress>;
        get virtualBranchFlag(): Nullable<boolean>;
        copy(id?: string, name?: Nullable<string>, webSite?: Nullable<string>, phone?: Nullable<features.getUserDetails.models.BranchPhone>, logo?: Nullable<features.getUserDetails.models.Image>, coverPhoto?: Nullable<features.getUserDetails.models.Image>, address?: Nullable<features.getUserDetails.models.BranchAddress>, virtualBranchFlag?: Nullable<boolean>): features.getUserDetails.models.BranchModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class BranchPhone {
        constructor(number: Nullable<string>, countryCode: Nullable<string>, nationalFormat: Nullable<string>, intlFormat: Nullable<string>);
        get number(): Nullable<string>;
        get countryCode(): Nullable<string>;
        get nationalFormat(): Nullable<string>;
        get intlFormat(): Nullable<string>;
        copy(number?: Nullable<string>, countryCode?: Nullable<string>, nationalFormat?: Nullable<string>, intlFormat?: Nullable<string>): features.getUserDetails.models.BranchPhone;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.getUserDetails.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class UseDetailsDataModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(firstName: Nullable<string>, lastName: Nullable<string>, qrcode: Nullable<string>, gender: Nullable<string>, birthDate: Nullable<string>, language: Nullable<string>, countryCode: Nullable<string>, profilePhoto: Nullable<string>, createdAt: Nullable<string>, updatedAt: Nullable<string>, enabled: Nullable<boolean>, emailVerified: Nullable<boolean>, phoneVerified: Nullable<boolean>);
        get firstName(): Nullable<string>;
        get lastName(): Nullable<string>;
        get qrcode(): Nullable<string>;
        get gender(): Nullable<string>;
        get birthDate(): Nullable<string>;
        get language(): Nullable<string>;
        get countryCode(): Nullable<string>;
        get profilePhoto(): Nullable<string>;
        get createdAt(): Nullable<string>;
        get updatedAt(): Nullable<string>;
        get enabled(): Nullable<boolean>;
        get emailVerified(): Nullable<boolean>;
        get phoneVerified(): Nullable<boolean>;
        copy(firstName?: Nullable<string>, lastName?: Nullable<string>, qrcode?: Nullable<string>, gender?: Nullable<string>, birthDate?: Nullable<string>, language?: Nullable<string>, countryCode?: Nullable<string>, profilePhoto?: Nullable<string>, createdAt?: Nullable<string>, updatedAt?: Nullable<string>, enabled?: Nullable<boolean>, emailVerified?: Nullable<boolean>, phoneVerified?: Nullable<boolean>): features.getUserDetails.models.UseDetailsDataModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class UseDetailsIncludedModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(branches: Nullable<any>/* Nullable<kotlin.collections.List<features.getUserDetails.models.BranchModel>> */);
        get branches(): Nullable<any>/* Nullable<kotlin.collections.List<features.getUserDetails.models.BranchModel>> */;
        copy(branches?: Nullable<any>/* Nullable<kotlin.collections.List<features.getUserDetails.models.BranchModel>> */): features.getUserDetails.models.UseDetailsIncludedModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.getUserDetails.models {
    class UseDetailsModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: features.getUserDetails.models.UseDetailsDataModel, included: Nullable<features.getUserDetails.models.UseDetailsIncludedModel>);
        get data(): features.getUserDetails.models.UseDetailsDataModel;
        get included(): Nullable<features.getUserDetails.models.UseDetailsIncludedModel>;
        copy(data?: features.getUserDetails.models.UseDetailsDataModel, included?: Nullable<features.getUserDetails.models.UseDetailsIncludedModel>): features.getUserDetails.models.UseDetailsModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.strings.models {
    class ApplicationString {
        constructor(id: Nullable<number>, key: Nullable<string>, string: Nullable<string>, createdAt: Nullable<string>);
        get id(): Nullable<number>;
        get key(): Nullable<string>;
        get string(): Nullable<string>;
        get createdAt(): Nullable<string>;
        copy(id?: Nullable<number>, key?: Nullable<string>, string?: Nullable<string>, createdAt?: Nullable<string>): features.strings.models.ApplicationString;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.strings.models {
    class ApplicationStringsModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: any/* kotlin.collections.List<features.strings.models.ApplicationString> */);
        get data(): any/* kotlin.collections.List<features.strings.models.ApplicationString> */;
        copy(data?: any/* kotlin.collections.List<features.strings.models.ApplicationString> */): features.strings.models.ApplicationStringsModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class BranchIds {
        constructor(id: Nullable<string>);
        get id(): Nullable<string>;
        copy(id?: Nullable<string>): features.updateBusinessOffer.models.BranchIds;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class Image {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, _default: Nullable<boolean>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get default(): Nullable<boolean>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, _default?: Nullable<boolean>): features.updateBusinessOffer.models.Image;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class Images {
        constructor(large: Nullable<string>, medium: Nullable<string>, thumbnail: Nullable<string>, original: Nullable<string>);
        get large(): Nullable<string>;
        get medium(): Nullable<string>;
        get thumbnail(): Nullable<string>;
        get original(): Nullable<string>;
        copy(large?: Nullable<string>, medium?: Nullable<string>, thumbnail?: Nullable<string>, original?: Nullable<string>): features.updateBusinessOffer.models.Images;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class Language {
        constructor(id: number, abbreviation: Nullable<string>, name: Nullable<string>);
        get id(): number;
        get abbreviation(): Nullable<string>;
        get name(): Nullable<string>;
        copy(id?: number, abbreviation?: Nullable<string>, name?: Nullable<string>): features.updateBusinessOffer.models.Language;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class OfferModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(id: number, points: Nullable<number>, publishAt: Nullable<string>, expiresAt: Nullable<string>, isPublished: Nullable<boolean>, couponConvertible: Nullable<boolean>, realValue: Nullable<number>, discountValue: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, appsOnly: Nullable<boolean>, offerFrequencyId: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom: Nullable<string>, peakTo: Nullable<string>, type: Nullable<string>, typeId: Nullable<number>, targetedOfferFlag: Nullable<number>, priority: Nullable<number>, title: Nullable<string>, description: Nullable<string>, images: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.Image>> */, neverExpiresFlag: Nullable<boolean>, termsConditions: Nullable<string>, link: Nullable<string>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.OfferTranslation>> */, couponAutoGet: Nullable<boolean>, couponPermAvailable: Nullable<boolean>, couponExpiresIn: Nullable<number>, displaysIn: Nullable<number>);
        get id(): number;
        get points(): Nullable<number>;
        get publishAt(): Nullable<string>;
        get expiresAt(): Nullable<string>;
        get isPublished(): Nullable<boolean>;
        get couponConvertible(): Nullable<boolean>;
        get realValue(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get offerFrequencyId(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get peakFrom(): Nullable<string>;
        get peakTo(): Nullable<string>;
        get type(): Nullable<string>;
        get typeId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get priority(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.Image>> */;
        get neverExpiresFlag(): Nullable<boolean>;
        get termsConditions(): Nullable<string>;
        get link(): Nullable<string>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.OfferTranslation>> */;
        get couponAutoGet(): Nullable<boolean>;
        get couponPermAvailable(): Nullable<boolean>;
        get couponExpiresIn(): Nullable<number>;
        get displaysIn(): Nullable<number>;
        copy(id?: number, points?: Nullable<number>, publishAt?: Nullable<string>, expiresAt?: Nullable<string>, isPublished?: Nullable<boolean>, couponConvertible?: Nullable<boolean>, realValue?: Nullable<number>, discountValue?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, appsOnly?: Nullable<boolean>, offerFrequencyId?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, peakFrom?: Nullable<string>, peakTo?: Nullable<string>, type?: Nullable<string>, typeId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, priority?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.Image>> */, neverExpiresFlag?: Nullable<boolean>, termsConditions?: Nullable<string>, link?: Nullable<string>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.OfferTranslation>> */, couponAutoGet?: Nullable<boolean>, couponPermAvailable?: Nullable<boolean>, couponExpiresIn?: Nullable<number>, displaysIn?: Nullable<number>): features.updateBusinessOffer.models.OfferModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class OfferRequestLanguages {
        constructor(languageId: Nullable<number>, title: Nullable<string>, description: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>);
        get languageId(): Nullable<number>;
        get title(): Nullable<string>;
        get description(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        copy(languageId?: Nullable<number>, title?: Nullable<string>, description?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>): features.updateBusinessOffer.models.OfferRequestLanguages;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class OfferTranslation {
        constructor(id: number, languageId: Nullable<number>, offerTitle: Nullable<string>, offerDescription: Nullable<string>, offerTermsConditions: Nullable<string>, offerLink: Nullable<string>, couponTitle: Nullable<string>, couponDescription: Nullable<string>, couponTermsConditions: Nullable<string>, couponLink: Nullable<string>, couponAvailableAt: Nullable<string>, language: Nullable<features.updateBusinessOffer.models.Language>);
        get id(): number;
        get languageId(): Nullable<number>;
        get offerTitle(): Nullable<string>;
        get offerDescription(): Nullable<string>;
        get offerTermsConditions(): Nullable<string>;
        get offerLink(): Nullable<string>;
        get couponTitle(): Nullable<string>;
        get couponDescription(): Nullable<string>;
        get couponTermsConditions(): Nullable<string>;
        get couponLink(): Nullable<string>;
        get couponAvailableAt(): Nullable<string>;
        get language(): Nullable<features.updateBusinessOffer.models.Language>;
        copy(id?: number, languageId?: Nullable<number>, offerTitle?: Nullable<string>, offerDescription?: Nullable<string>, offerTermsConditions?: Nullable<string>, offerLink?: Nullable<string>, couponTitle?: Nullable<string>, couponDescription?: Nullable<string>, couponTermsConditions?: Nullable<string>, couponLink?: Nullable<string>, couponAvailableAt?: Nullable<string>, language?: Nullable<features.updateBusinessOffer.models.Language>): features.updateBusinessOffer.models.OfferTranslation;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class UpdateOfferRequestModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(offerFrequencyId: Nullable<number>, targetedOfferFlag: Nullable<number>, neverExpiresFlag: Nullable<number>, discountValue: Nullable<number>, realValue: Nullable<number>, offerLanguages: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.OfferRequestLanguages>> */, images: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.Images>> */, availableAtBranches: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.BranchIds>> */, couponAutoGet: Nullable<number>, couponPermAvailable: Nullable<number>, couponConvertible: Nullable<number>, couponExpiresIn: Nullable<number>, multipFactor: Nullable<number>, minPurchase: Nullable<number>, maxPurchase: Nullable<number>, freqDetails: Nullable<any>/* Nullable<kotlin.collections.List<number>> */, points: Nullable<number>, appsOnly: Nullable<boolean>, displaysIn: Nullable<number>);
        get offerFrequencyId(): Nullable<number>;
        get targetedOfferFlag(): Nullable<number>;
        get neverExpiresFlag(): Nullable<number>;
        get discountValue(): Nullable<number>;
        get realValue(): Nullable<number>;
        get offerLanguages(): Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.OfferRequestLanguages>> */;
        get images(): Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.Images>> */;
        get availableAtBranches(): Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.BranchIds>> */;
        get couponAutoGet(): Nullable<number>;
        get couponPermAvailable(): Nullable<number>;
        get couponConvertible(): Nullable<number>;
        get couponExpiresIn(): Nullable<number>;
        get multipFactor(): Nullable<number>;
        get minPurchase(): Nullable<number>;
        get maxPurchase(): Nullable<number>;
        get freqDetails(): Nullable<any>/* Nullable<kotlin.collections.List<number>> */;
        get points(): Nullable<number>;
        get appsOnly(): Nullable<boolean>;
        get displaysIn(): Nullable<number>;
        copy(offerFrequencyId?: Nullable<number>, targetedOfferFlag?: Nullable<number>, neverExpiresFlag?: Nullable<number>, discountValue?: Nullable<number>, realValue?: Nullable<number>, offerLanguages?: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.OfferRequestLanguages>> */, images?: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.Images>> */, availableAtBranches?: Nullable<any>/* Nullable<kotlin.collections.List<features.updateBusinessOffer.models.BranchIds>> */, couponAutoGet?: Nullable<number>, couponPermAvailable?: Nullable<number>, couponConvertible?: Nullable<number>, couponExpiresIn?: Nullable<number>, multipFactor?: Nullable<number>, minPurchase?: Nullable<number>, maxPurchase?: Nullable<number>, freqDetails?: Nullable<any>/* Nullable<kotlin.collections.List<number>> */, points?: Nullable<number>, appsOnly?: Nullable<boolean>, displaysIn?: Nullable<number>): features.updateBusinessOffer.models.UpdateOfferRequestModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessOffer.models {
    class UpdateOfferResponseModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: features.updateBusinessOffer.models.OfferModel);
        get data(): features.updateBusinessOffer.models.OfferModel;
        copy(data?: features.updateBusinessOffer.models.OfferModel): features.updateBusinessOffer.models.UpdateOfferResponseModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class BusinessRulesData {
        constructor(earning: Nullable<features.updateBusinessRules.models.EarningRules>, redeeming: Nullable<features.updateBusinessRules.models.RedeemingRules>, currency: Nullable<features.updateBusinessRules.models.CurrencyRules>);
        get earning(): Nullable<features.updateBusinessRules.models.EarningRules>;
        get redeeming(): Nullable<features.updateBusinessRules.models.RedeemingRules>;
        get currency(): Nullable<features.updateBusinessRules.models.CurrencyRules>;
        copy(earning?: Nullable<features.updateBusinessRules.models.EarningRules>, redeeming?: Nullable<features.updateBusinessRules.models.RedeemingRules>, currency?: Nullable<features.updateBusinessRules.models.CurrencyRules>): features.updateBusinessRules.models.BusinessRulesData;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class BusinessesRules /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(data: Nullable<features.updateBusinessRules.models.BusinessRulesData>);
        get data(): Nullable<features.updateBusinessRules.models.BusinessRulesData>;
        copy(data?: Nullable<features.updateBusinessRules.models.BusinessRulesData>): features.updateBusinessRules.models.BusinessesRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class CurrencyRules {
        constructor(name: Nullable<string>, symbol: Nullable<string>, isoCode: Nullable<string>, denominator: Nullable<number>);
        get name(): Nullable<string>;
        get symbol(): Nullable<string>;
        get isoCode(): Nullable<string>;
        get denominator(): Nullable<number>;
        copy(name?: Nullable<string>, symbol?: Nullable<string>, isoCode?: Nullable<string>, denominator?: Nullable<number>): features.updateBusinessRules.models.CurrencyRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class EarningRules {
        constructor(rewardRatio: Nullable<number>, rewardAmount: Nullable<number>, rewardPoints: Nullable<number>, socialMedia: Nullable<features.updateBusinessRules.models.SocialMediaRules>, rewardMilestoneAmount: Nullable<number>, welcomePoints: Nullable<number>);
        get rewardRatio(): Nullable<number>;
        get rewardAmount(): Nullable<number>;
        get rewardPoints(): Nullable<number>;
        get socialMedia(): Nullable<features.updateBusinessRules.models.SocialMediaRules>;
        get rewardMilestoneAmount(): Nullable<number>;
        get welcomePoints(): Nullable<number>;
        copy(rewardRatio?: Nullable<number>, rewardAmount?: Nullable<number>, rewardPoints?: Nullable<number>, socialMedia?: Nullable<features.updateBusinessRules.models.SocialMediaRules>, rewardMilestoneAmount?: Nullable<number>, welcomePoints?: Nullable<number>): features.updateBusinessRules.models.EarningRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class RedeemingRules {
        constructor(redemptionRatio: Nullable<number>, redemptionAmount: Nullable<number>);
        get redemptionRatio(): Nullable<number>;
        get redemptionAmount(): Nullable<number>;
        copy(redemptionRatio?: Nullable<number>, redemptionAmount?: Nullable<number>): features.updateBusinessRules.models.RedeemingRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class SocialMediaRules {
        constructor(active: Nullable<boolean>, rewardPoints: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, rewardPointsMax: Nullable<number>);
        get active(): Nullable<boolean>;
        get rewardPoints(): Nullable<any>/* Nullable<kotlin.collections.List<string>> */;
        get rewardPointsMax(): Nullable<number>;
        copy(active?: Nullable<boolean>, rewardPoints?: Nullable<any>/* Nullable<kotlin.collections.List<string>> */, rewardPointsMax?: Nullable<number>): features.updateBusinessRules.models.SocialMediaRules;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.updateBusinessRules.models {
    class UpdateBusinessRulesBodyRequest {
        constructor(rewardRatio: number, rewardMilestoneAmount: number, welcomePoints: number);
        get rewardRatio(): number;
        get rewardMilestoneAmount(): number;
        get welcomePoints(): number;
        copy(rewardRatio?: number, rewardMilestoneAmount?: number, welcomePoints?: number): features.updateBusinessRules.models.UpdateBusinessRulesBodyRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace features.userAuthentication.models {
    class UserAuthenticationModel /* extends kangaroorewards.appsdk.core.io.Model */ {
        constructor(tokenType: Nullable<string> | undefined, expiresIn: Nullable<number> | undefined, accessToken: Nullable<string>, refreshToken?: Nullable<string>);
        get tokenType(): Nullable<string>;
        get expiresIn(): Nullable<number>;
        get accessToken(): Nullable<string>;
        get refreshToken(): Nullable<string>;
        copy(tokenType?: Nullable<string>, expiresIn?: Nullable<number>, accessToken?: Nullable<string>, refreshToken?: Nullable<string>): features.userAuthentication.models.UserAuthenticationModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            get ACCESS_TOKEN(): string;
            get REFRESH_TOKEN(): string;
        };
    }
}
export as namespace KangarooAppBusinessSDK;