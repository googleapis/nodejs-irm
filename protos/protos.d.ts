// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace irm. */
        namespace irm {

            /** Namespace v1alpha2. */
            namespace v1alpha2 {

                /** Properties of a User. */
                interface IUser {

                    /** User userId */
                    userId?: (string|null);

                    /** User email */
                    email?: (string|null);
                }

                /** Represents a User. */
                class User implements IUser {

                    /**
                     * Constructs a new User.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IUser);

                    /** User userId. */
                    public userId: string;

                    /** User email. */
                    public email: string;

                    /** User user. */
                    public user?: ("userId"|"email");

                    /**
                     * Creates a new User instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns User instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IUser): google.cloud.irm.v1alpha2.User;

                    /**
                     * Encodes the specified User message. Does not implicitly {@link google.cloud.irm.v1alpha2.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified User message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.User.verify|verify} messages.
                     * @param message User message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a User message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.User;

                    /**
                     * Decodes a User message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns User
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.User;

                    /**
                     * Verifies a User message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a User message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns User
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.User;

                    /**
                     * Creates a plain object from a User message. Also converts values to other types if specified.
                     * @param message User
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this User to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Signal. */
                interface ISignal {

                    /** Signal name */
                    name?: (string|null);

                    /** Signal etag */
                    etag?: (string|null);

                    /** Signal incident */
                    incident?: (string|null);

                    /** Signal createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Signal closeTime */
                    closeTime?: (google.protobuf.ITimestamp|null);

                    /** Signal detectTime */
                    detectTime?: (google.protobuf.ITimestamp|null);

                    /** Signal creator */
                    creator?: (google.cloud.irm.v1alpha2.IUser|null);

                    /** Signal title */
                    title?: (string|null);

                    /** Signal contentType */
                    contentType?: (string|null);

                    /** Signal content */
                    content?: (string|null);

                    /** Signal signalState */
                    signalState?: (google.cloud.irm.v1alpha2.Signal.State|keyof typeof google.cloud.irm.v1alpha2.Signal.State|null);

                    /** Signal signalArtifacts */
                    signalArtifacts?: (google.cloud.irm.v1alpha2.Signal.ISignalArtifact[]|null);
                }

                /** Represents a Signal. */
                class Signal implements ISignal {

                    /**
                     * Constructs a new Signal.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISignal);

                    /** Signal name. */
                    public name: string;

                    /** Signal etag. */
                    public etag: string;

                    /** Signal incident. */
                    public incident: string;

                    /** Signal createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Signal closeTime. */
                    public closeTime?: (google.protobuf.ITimestamp|null);

                    /** Signal detectTime. */
                    public detectTime?: (google.protobuf.ITimestamp|null);

                    /** Signal creator. */
                    public creator?: (google.cloud.irm.v1alpha2.IUser|null);

                    /** Signal title. */
                    public title: string;

                    /** Signal contentType. */
                    public contentType: string;

                    /** Signal content. */
                    public content: string;

                    /** Signal signalState. */
                    public signalState: (google.cloud.irm.v1alpha2.Signal.State|keyof typeof google.cloud.irm.v1alpha2.Signal.State);

                    /** Signal signalArtifacts. */
                    public signalArtifacts: google.cloud.irm.v1alpha2.Signal.ISignalArtifact[];

                    /**
                     * Creates a new Signal instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Signal instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISignal): google.cloud.irm.v1alpha2.Signal;

                    /**
                     * Encodes the specified Signal message. Does not implicitly {@link google.cloud.irm.v1alpha2.Signal.verify|verify} messages.
                     * @param message Signal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Signal message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Signal.verify|verify} messages.
                     * @param message Signal message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISignal, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Signal message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Signal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Signal;

                    /**
                     * Decodes a Signal message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Signal
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Signal;

                    /**
                     * Verifies a Signal message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Signal message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Signal
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Signal;

                    /**
                     * Creates a plain object from a Signal message. Also converts values to other types if specified.
                     * @param message Signal
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Signal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Signal to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Signal {

                    /** Properties of a SignalArtifact. */
                    interface ISignalArtifact {

                        /** SignalArtifact userType */
                        userType?: (string|null);

                        /** SignalArtifact uri */
                        uri?: (string|null);
                    }

                    /** Represents a SignalArtifact. */
                    class SignalArtifact implements ISignalArtifact {

                        /**
                         * Constructs a new SignalArtifact.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.irm.v1alpha2.Signal.ISignalArtifact);

                        /** SignalArtifact userType. */
                        public userType: string;

                        /** SignalArtifact uri. */
                        public uri: string;

                        /** SignalArtifact artifactType. */
                        public artifactType?: "userType";

                        /**
                         * Creates a new SignalArtifact instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SignalArtifact instance
                         */
                        public static create(properties?: google.cloud.irm.v1alpha2.Signal.ISignalArtifact): google.cloud.irm.v1alpha2.Signal.SignalArtifact;

                        /**
                         * Encodes the specified SignalArtifact message. Does not implicitly {@link google.cloud.irm.v1alpha2.Signal.SignalArtifact.verify|verify} messages.
                         * @param message SignalArtifact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.irm.v1alpha2.Signal.ISignalArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SignalArtifact message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Signal.SignalArtifact.verify|verify} messages.
                         * @param message SignalArtifact message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.irm.v1alpha2.Signal.ISignalArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SignalArtifact message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SignalArtifact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Signal.SignalArtifact;

                        /**
                         * Decodes a SignalArtifact message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SignalArtifact
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Signal.SignalArtifact;

                        /**
                         * Verifies a SignalArtifact message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SignalArtifact message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SignalArtifact
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Signal.SignalArtifact;

                        /**
                         * Creates a plain object from a SignalArtifact message. Also converts values to other types if specified.
                         * @param message SignalArtifact
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.irm.v1alpha2.Signal.SignalArtifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SignalArtifact to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        STATE_OPEN = 1,
                        STATE_CLOSED = 2
                    }
                }

                /** Properties of an Annotation. */
                interface IAnnotation {

                    /** Annotation name */
                    name?: (string|null);

                    /** Annotation author */
                    author?: (google.cloud.irm.v1alpha2.IUser|null);

                    /** Annotation createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Annotation content */
                    content?: (string|null);

                    /** Annotation contentType */
                    contentType?: (string|null);
                }

                /** Represents an Annotation. */
                class Annotation implements IAnnotation {

                    /**
                     * Constructs a new Annotation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IAnnotation);

                    /** Annotation name. */
                    public name: string;

                    /** Annotation author. */
                    public author?: (google.cloud.irm.v1alpha2.IUser|null);

                    /** Annotation createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Annotation content. */
                    public content: string;

                    /** Annotation contentType. */
                    public contentType: string;

                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Annotation instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IAnnotation): google.cloud.irm.v1alpha2.Annotation;

                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.cloud.irm.v1alpha2.Annotation.verify|verify} messages.
                     * @param message Annotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Annotation.verify|verify} messages.
                     * @param message Annotation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Annotation;

                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Annotation;

                    /**
                     * Verifies an Annotation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Annotation
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Annotation;

                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @param message Annotation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Annotation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Tag. */
                interface ITag {

                    /** Tag name */
                    name?: (string|null);

                    /** Tag displayName */
                    displayName?: (string|null);
                }

                /** Represents a Tag. */
                class Tag implements ITag {

                    /**
                     * Constructs a new Tag.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ITag);

                    /** Tag name. */
                    public name: string;

                    /** Tag displayName. */
                    public displayName: string;

                    /**
                     * Creates a new Tag instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Tag instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ITag): google.cloud.irm.v1alpha2.Tag;

                    /**
                     * Encodes the specified Tag message. Does not implicitly {@link google.cloud.irm.v1alpha2.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Tag message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Tag.verify|verify} messages.
                     * @param message Tag message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ITag, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Tag message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Tag;

                    /**
                     * Decodes a Tag message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Tag
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Tag;

                    /**
                     * Verifies a Tag message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Tag message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Tag
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Tag;

                    /**
                     * Creates a plain object from a Tag message. Also converts values to other types if specified.
                     * @param message Tag
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Tag, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Tag to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Synopsis. */
                interface ISynopsis {

                    /** Synopsis contentType */
                    contentType?: (string|null);

                    /** Synopsis content */
                    content?: (string|null);

                    /** Synopsis updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Synopsis author */
                    author?: (google.cloud.irm.v1alpha2.IUser|null);
                }

                /** Represents a Synopsis. */
                class Synopsis implements ISynopsis {

                    /**
                     * Constructs a new Synopsis.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISynopsis);

                    /** Synopsis contentType. */
                    public contentType: string;

                    /** Synopsis content. */
                    public content: string;

                    /** Synopsis updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Synopsis author. */
                    public author?: (google.cloud.irm.v1alpha2.IUser|null);

                    /**
                     * Creates a new Synopsis instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Synopsis instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISynopsis): google.cloud.irm.v1alpha2.Synopsis;

                    /**
                     * Encodes the specified Synopsis message. Does not implicitly {@link google.cloud.irm.v1alpha2.Synopsis.verify|verify} messages.
                     * @param message Synopsis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISynopsis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Synopsis message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Synopsis.verify|verify} messages.
                     * @param message Synopsis message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISynopsis, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Synopsis message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Synopsis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Synopsis;

                    /**
                     * Decodes a Synopsis message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Synopsis
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Synopsis;

                    /**
                     * Verifies a Synopsis message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Synopsis message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Synopsis
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Synopsis;

                    /**
                     * Creates a plain object from a Synopsis message. Also converts values to other types if specified.
                     * @param message Synopsis
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Synopsis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Synopsis to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Incident. */
                interface IIncident {

                    /** Incident name */
                    name?: (string|null);

                    /** Incident title */
                    title?: (string|null);

                    /** Incident escalationLevel */
                    escalationLevel?: (google.cloud.irm.v1alpha2.Incident.EscalationLevel|keyof typeof google.cloud.irm.v1alpha2.Incident.EscalationLevel|null);

                    /** Incident etag */
                    etag?: (string|null);

                    /** Incident severity */
                    severity?: (google.cloud.irm.v1alpha2.Incident.Severity|keyof typeof google.cloud.irm.v1alpha2.Incident.Severity|null);

                    /** Incident stage */
                    stage?: (google.cloud.irm.v1alpha2.Incident.Stage|keyof typeof google.cloud.irm.v1alpha2.Incident.Stage|null);

                    /** Incident duplicateIncident */
                    duplicateIncident?: (string|null);

                    /** Incident startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** Incident synopsis */
                    synopsis?: (google.cloud.irm.v1alpha2.ISynopsis|null);

                    /** Incident communicationVenue */
                    communicationVenue?: (google.cloud.irm.v1alpha2.Incident.ICommunicationVenue|null);
                }

                /** Represents an Incident. */
                class Incident implements IIncident {

                    /**
                     * Constructs a new Incident.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IIncident);

                    /** Incident name. */
                    public name: string;

                    /** Incident title. */
                    public title: string;

                    /** Incident escalationLevel. */
                    public escalationLevel: (google.cloud.irm.v1alpha2.Incident.EscalationLevel|keyof typeof google.cloud.irm.v1alpha2.Incident.EscalationLevel);

                    /** Incident etag. */
                    public etag: string;

                    /** Incident severity. */
                    public severity: (google.cloud.irm.v1alpha2.Incident.Severity|keyof typeof google.cloud.irm.v1alpha2.Incident.Severity);

                    /** Incident stage. */
                    public stage: (google.cloud.irm.v1alpha2.Incident.Stage|keyof typeof google.cloud.irm.v1alpha2.Incident.Stage);

                    /** Incident duplicateIncident. */
                    public duplicateIncident: string;

                    /** Incident startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** Incident synopsis. */
                    public synopsis?: (google.cloud.irm.v1alpha2.ISynopsis|null);

                    /** Incident communicationVenue. */
                    public communicationVenue?: (google.cloud.irm.v1alpha2.Incident.ICommunicationVenue|null);

                    /**
                     * Creates a new Incident instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Incident instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IIncident): google.cloud.irm.v1alpha2.Incident;

                    /**
                     * Encodes the specified Incident message. Does not implicitly {@link google.cloud.irm.v1alpha2.Incident.verify|verify} messages.
                     * @param message Incident message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IIncident, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Incident message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Incident.verify|verify} messages.
                     * @param message Incident message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IIncident, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Incident message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Incident
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Incident;

                    /**
                     * Decodes an Incident message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Incident
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Incident;

                    /**
                     * Verifies an Incident message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Incident message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Incident
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Incident;

                    /**
                     * Creates a plain object from an Incident message. Also converts values to other types if specified.
                     * @param message Incident
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Incident, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Incident to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Incident {

                    /** Properties of a CommunicationVenue. */
                    interface ICommunicationVenue {

                        /** CommunicationVenue uri */
                        uri?: (string|null);

                        /** CommunicationVenue displayName */
                        displayName?: (string|null);

                        /** CommunicationVenue channelType */
                        channelType?: (google.cloud.irm.v1alpha2.Incident.CommunicationVenue.ChannelType|keyof typeof google.cloud.irm.v1alpha2.Incident.CommunicationVenue.ChannelType|null);
                    }

                    /** Represents a CommunicationVenue. */
                    class CommunicationVenue implements ICommunicationVenue {

                        /**
                         * Constructs a new CommunicationVenue.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.irm.v1alpha2.Incident.ICommunicationVenue);

                        /** CommunicationVenue uri. */
                        public uri: string;

                        /** CommunicationVenue displayName. */
                        public displayName: string;

                        /** CommunicationVenue channelType. */
                        public channelType: (google.cloud.irm.v1alpha2.Incident.CommunicationVenue.ChannelType|keyof typeof google.cloud.irm.v1alpha2.Incident.CommunicationVenue.ChannelType);

                        /**
                         * Creates a new CommunicationVenue instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommunicationVenue instance
                         */
                        public static create(properties?: google.cloud.irm.v1alpha2.Incident.ICommunicationVenue): google.cloud.irm.v1alpha2.Incident.CommunicationVenue;

                        /**
                         * Encodes the specified CommunicationVenue message. Does not implicitly {@link google.cloud.irm.v1alpha2.Incident.CommunicationVenue.verify|verify} messages.
                         * @param message CommunicationVenue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.irm.v1alpha2.Incident.ICommunicationVenue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CommunicationVenue message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Incident.CommunicationVenue.verify|verify} messages.
                         * @param message CommunicationVenue message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.irm.v1alpha2.Incident.ICommunicationVenue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommunicationVenue message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommunicationVenue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Incident.CommunicationVenue;

                        /**
                         * Decodes a CommunicationVenue message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CommunicationVenue
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Incident.CommunicationVenue;

                        /**
                         * Verifies a CommunicationVenue message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CommunicationVenue message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommunicationVenue
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Incident.CommunicationVenue;

                        /**
                         * Creates a plain object from a CommunicationVenue message. Also converts values to other types if specified.
                         * @param message CommunicationVenue
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.irm.v1alpha2.Incident.CommunicationVenue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommunicationVenue to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace CommunicationVenue {

                        /** ChannelType enum. */
                        enum ChannelType {
                            CHANNEL_TYPE_UNSPECIFIED = 0,
                            CHANNEL_TYPE_URI = 1,
                            CHANNEL_TYPE_SLACK = 5
                        }
                    }

                    /** EscalationLevel enum. */
                    enum EscalationLevel {
                        ESCALATION_LEVEL_UNSPECIFIED = 0,
                        ESCALATION_LEVEL_ORGANIZATION = 1
                    }

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        SEVERITY_HUGE = 1,
                        SEVERITY_MAJOR = 2,
                        SEVERITY_MEDIUM = 3,
                        SEVERITY_MINOR = 4,
                        SEVERITY_NEGLIGIBLE = 5
                    }

                    /** Stage enum. */
                    enum Stage {
                        STAGE_UNSPECIFIED = 0,
                        STAGE_DETECTED = 4,
                        STAGE_TRIAGED = 1,
                        STAGE_MITIGATED = 2,
                        STAGE_RESOLVED = 3,
                        STAGE_DOCUMENTED = 5,
                        STAGE_DUPLICATE = 6
                    }
                }

                /** Properties of an IncidentRole. */
                interface IIncidentRole {

                    /** IncidentRole type */
                    type?: (google.cloud.irm.v1alpha2.IncidentRole.Type|keyof typeof google.cloud.irm.v1alpha2.IncidentRole.Type|null);

                    /** IncidentRole title */
                    title?: (string|null);

                    /** IncidentRole description */
                    description?: (string|null);
                }

                /** Represents an IncidentRole. */
                class IncidentRole implements IIncidentRole {

                    /**
                     * Constructs a new IncidentRole.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IIncidentRole);

                    /** IncidentRole type. */
                    public type: (google.cloud.irm.v1alpha2.IncidentRole.Type|keyof typeof google.cloud.irm.v1alpha2.IncidentRole.Type);

                    /** IncidentRole title. */
                    public title: string;

                    /** IncidentRole description. */
                    public description: string;

                    /**
                     * Creates a new IncidentRole instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IncidentRole instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IIncidentRole): google.cloud.irm.v1alpha2.IncidentRole;

                    /**
                     * Encodes the specified IncidentRole message. Does not implicitly {@link google.cloud.irm.v1alpha2.IncidentRole.verify|verify} messages.
                     * @param message IncidentRole message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IIncidentRole, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IncidentRole message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.IncidentRole.verify|verify} messages.
                     * @param message IncidentRole message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IIncidentRole, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IncidentRole message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IncidentRole
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.IncidentRole;

                    /**
                     * Decodes an IncidentRole message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IncidentRole
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.IncidentRole;

                    /**
                     * Verifies an IncidentRole message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IncidentRole message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IncidentRole
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.IncidentRole;

                    /**
                     * Creates a plain object from an IncidentRole message. Also converts values to other types if specified.
                     * @param message IncidentRole
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.IncidentRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IncidentRole to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IncidentRole {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        TYPE_INCIDENT_COMMANDER = 1,
                        TYPE_COMMUNICATIONS_LEAD = 2,
                        TYPE_OPERATIONS_LEAD = 3,
                        TYPE_EXTERNAL_CUSTOMER_COMMUNICATIONS_LEAD = 4,
                        TYPE_PRIMARY_ONCALL = 5,
                        TYPE_SECONDARY_ONCALL = 6,
                        TYPE_OTHER = 7
                    }
                }

                /** Properties of an IncidentRoleAssignment. */
                interface IIncidentRoleAssignment {

                    /** IncidentRoleAssignment name */
                    name?: (string|null);

                    /** IncidentRoleAssignment etag */
                    etag?: (string|null);

                    /** IncidentRoleAssignment role */
                    role?: (google.cloud.irm.v1alpha2.IIncidentRole|null);

                    /** IncidentRoleAssignment assignee */
                    assignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /** IncidentRoleAssignment proposedAssignee */
                    proposedAssignee?: (google.cloud.irm.v1alpha2.IUser|null);
                }

                /** Represents an IncidentRoleAssignment. */
                class IncidentRoleAssignment implements IIncidentRoleAssignment {

                    /**
                     * Constructs a new IncidentRoleAssignment.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IIncidentRoleAssignment);

                    /** IncidentRoleAssignment name. */
                    public name: string;

                    /** IncidentRoleAssignment etag. */
                    public etag: string;

                    /** IncidentRoleAssignment role. */
                    public role?: (google.cloud.irm.v1alpha2.IIncidentRole|null);

                    /** IncidentRoleAssignment assignee. */
                    public assignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /** IncidentRoleAssignment proposedAssignee. */
                    public proposedAssignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /**
                     * Creates a new IncidentRoleAssignment instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IncidentRoleAssignment instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IIncidentRoleAssignment): google.cloud.irm.v1alpha2.IncidentRoleAssignment;

                    /**
                     * Encodes the specified IncidentRoleAssignment message. Does not implicitly {@link google.cloud.irm.v1alpha2.IncidentRoleAssignment.verify|verify} messages.
                     * @param message IncidentRoleAssignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IIncidentRoleAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IncidentRoleAssignment message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.IncidentRoleAssignment.verify|verify} messages.
                     * @param message IncidentRoleAssignment message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IIncidentRoleAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IncidentRoleAssignment message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IncidentRoleAssignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.IncidentRoleAssignment;

                    /**
                     * Decodes an IncidentRoleAssignment message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IncidentRoleAssignment
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.IncidentRoleAssignment;

                    /**
                     * Verifies an IncidentRoleAssignment message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IncidentRoleAssignment message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IncidentRoleAssignment
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.IncidentRoleAssignment;

                    /**
                     * Creates a plain object from an IncidentRoleAssignment message. Also converts values to other types if specified.
                     * @param message IncidentRoleAssignment
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.IncidentRoleAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IncidentRoleAssignment to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Artifact. */
                interface IArtifact {

                    /** Artifact name */
                    name?: (string|null);

                    /** Artifact displayName */
                    displayName?: (string|null);

                    /** Artifact etag */
                    etag?: (string|null);

                    /** Artifact url */
                    url?: (string|null);

                    /** Artifact type */
                    type?: (google.cloud.irm.v1alpha2.Artifact.Type|keyof typeof google.cloud.irm.v1alpha2.Artifact.Type|null);
                }

                /** Represents an Artifact. */
                class Artifact implements IArtifact {

                    /**
                     * Constructs a new Artifact.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IArtifact);

                    /** Artifact name. */
                    public name: string;

                    /** Artifact displayName. */
                    public displayName: string;

                    /** Artifact etag. */
                    public etag: string;

                    /** Artifact url. */
                    public url: string;

                    /** Artifact type. */
                    public type: (google.cloud.irm.v1alpha2.Artifact.Type|keyof typeof google.cloud.irm.v1alpha2.Artifact.Type);

                    /**
                     * Creates a new Artifact instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Artifact instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IArtifact): google.cloud.irm.v1alpha2.Artifact;

                    /**
                     * Encodes the specified Artifact message. Does not implicitly {@link google.cloud.irm.v1alpha2.Artifact.verify|verify} messages.
                     * @param message Artifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Artifact message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Artifact.verify|verify} messages.
                     * @param message Artifact message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IArtifact, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Artifact message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Artifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Artifact;

                    /**
                     * Decodes an Artifact message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Artifact
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Artifact;

                    /**
                     * Verifies an Artifact message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Artifact message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Artifact
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Artifact;

                    /**
                     * Creates a plain object from an Artifact message. Also converts values to other types if specified.
                     * @param message Artifact
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Artifact, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Artifact to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Artifact {

                    /** Type enum. */
                    enum Type {
                        TYPE_UNSPECIFIED = 0,
                        TYPE_URL = 1,
                        TYPE_JIRA_ISSUE = 4
                    }
                }

                /** Properties of a CommunicationChannel. */
                interface ICommunicationChannel {

                    /** CommunicationChannel email */
                    email?: (google.cloud.irm.v1alpha2.CommunicationChannel.IEmail|null);

                    /** CommunicationChannel notificationChannel */
                    notificationChannel?: (google.cloud.irm.v1alpha2.CommunicationChannel.INotificationChannel|null);
                }

                /** Represents a CommunicationChannel. */
                class CommunicationChannel implements ICommunicationChannel {

                    /**
                     * Constructs a new CommunicationChannel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICommunicationChannel);

                    /** CommunicationChannel email. */
                    public email?: (google.cloud.irm.v1alpha2.CommunicationChannel.IEmail|null);

                    /** CommunicationChannel notificationChannel. */
                    public notificationChannel?: (google.cloud.irm.v1alpha2.CommunicationChannel.INotificationChannel|null);

                    /** CommunicationChannel endpoint. */
                    public endpoint?: ("email"|"notificationChannel");

                    /**
                     * Creates a new CommunicationChannel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CommunicationChannel instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICommunicationChannel): google.cloud.irm.v1alpha2.CommunicationChannel;

                    /**
                     * Encodes the specified CommunicationChannel message. Does not implicitly {@link google.cloud.irm.v1alpha2.CommunicationChannel.verify|verify} messages.
                     * @param message CommunicationChannel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICommunicationChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CommunicationChannel message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CommunicationChannel.verify|verify} messages.
                     * @param message CommunicationChannel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICommunicationChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CommunicationChannel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CommunicationChannel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CommunicationChannel;

                    /**
                     * Decodes a CommunicationChannel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CommunicationChannel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CommunicationChannel;

                    /**
                     * Verifies a CommunicationChannel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CommunicationChannel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CommunicationChannel
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CommunicationChannel;

                    /**
                     * Creates a plain object from a CommunicationChannel message. Also converts values to other types if specified.
                     * @param message CommunicationChannel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CommunicationChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CommunicationChannel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CommunicationChannel {

                    /** Properties of an Email. */
                    interface IEmail {

                        /** Email address */
                        address?: (string|null);
                    }

                    /** Represents an Email. */
                    class Email implements IEmail {

                        /**
                         * Constructs a new Email.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.irm.v1alpha2.CommunicationChannel.IEmail);

                        /** Email address. */
                        public address: string;

                        /**
                         * Creates a new Email instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Email instance
                         */
                        public static create(properties?: google.cloud.irm.v1alpha2.CommunicationChannel.IEmail): google.cloud.irm.v1alpha2.CommunicationChannel.Email;

                        /**
                         * Encodes the specified Email message. Does not implicitly {@link google.cloud.irm.v1alpha2.CommunicationChannel.Email.verify|verify} messages.
                         * @param message Email message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.irm.v1alpha2.CommunicationChannel.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Email message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CommunicationChannel.Email.verify|verify} messages.
                         * @param message Email message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.irm.v1alpha2.CommunicationChannel.IEmail, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Email message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Email
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CommunicationChannel.Email;

                        /**
                         * Decodes an Email message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Email
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CommunicationChannel.Email;

                        /**
                         * Verifies an Email message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Email message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Email
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CommunicationChannel.Email;

                        /**
                         * Creates a plain object from an Email message. Also converts values to other types if specified.
                         * @param message Email
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.irm.v1alpha2.CommunicationChannel.Email, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Email to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a NotificationChannel. */
                    interface INotificationChannel {

                        /** NotificationChannel name */
                        name?: (string|null);
                    }

                    /** Represents a NotificationChannel. */
                    class NotificationChannel implements INotificationChannel {

                        /**
                         * Constructs a new NotificationChannel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.irm.v1alpha2.CommunicationChannel.INotificationChannel);

                        /** NotificationChannel name. */
                        public name: string;

                        /**
                         * Creates a new NotificationChannel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns NotificationChannel instance
                         */
                        public static create(properties?: google.cloud.irm.v1alpha2.CommunicationChannel.INotificationChannel): google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel;

                        /**
                         * Encodes the specified NotificationChannel message. Does not implicitly {@link google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel.verify|verify} messages.
                         * @param message NotificationChannel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.irm.v1alpha2.CommunicationChannel.INotificationChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified NotificationChannel message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel.verify|verify} messages.
                         * @param message NotificationChannel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.irm.v1alpha2.CommunicationChannel.INotificationChannel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a NotificationChannel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns NotificationChannel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel;

                        /**
                         * Decodes a NotificationChannel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns NotificationChannel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel;

                        /**
                         * Verifies a NotificationChannel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a NotificationChannel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns NotificationChannel
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel;

                        /**
                         * Creates a plain object from a NotificationChannel message. Also converts values to other types if specified.
                         * @param message NotificationChannel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.irm.v1alpha2.CommunicationChannel.NotificationChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this NotificationChannel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Subscription. */
                interface ISubscription {

                    /** Subscription name */
                    name?: (string|null);

                    /** Subscription etag */
                    etag?: (string|null);

                    /** Subscription subscriptionChannel */
                    subscriptionChannel?: (google.cloud.irm.v1alpha2.ICommunicationChannel|null);

                    /** Subscription eventTypes */
                    eventTypes?: (google.cloud.irm.v1alpha2.Subscription.EventType[]|null);
                }

                /** Represents a Subscription. */
                class Subscription implements ISubscription {

                    /**
                     * Constructs a new Subscription.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISubscription);

                    /** Subscription name. */
                    public name: string;

                    /** Subscription etag. */
                    public etag: string;

                    /** Subscription subscriptionChannel. */
                    public subscriptionChannel?: (google.cloud.irm.v1alpha2.ICommunicationChannel|null);

                    /** Subscription eventTypes. */
                    public eventTypes: google.cloud.irm.v1alpha2.Subscription.EventType[];

                    /**
                     * Creates a new Subscription instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Subscription instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISubscription): google.cloud.irm.v1alpha2.Subscription;

                    /**
                     * Encodes the specified Subscription message. Does not implicitly {@link google.cloud.irm.v1alpha2.Subscription.verify|verify} messages.
                     * @param message Subscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Subscription message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.Subscription.verify|verify} messages.
                     * @param message Subscription message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Subscription message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Subscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.Subscription;

                    /**
                     * Decodes a Subscription message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Subscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.Subscription;

                    /**
                     * Verifies a Subscription message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Subscription message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Subscription
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.Subscription;

                    /**
                     * Creates a plain object from a Subscription message. Also converts values to other types if specified.
                     * @param message Subscription
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.Subscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Subscription to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Subscription {

                    /** EventType enum. */
                    enum EventType {
                        EVENT_TYPE_UNSPECIFIED = 0,
                        EVENT_TYPE_TITLE_CHANGE = 1,
                        EVENT_TYPE_SYNOPSIS_CHANGE = 2,
                        EVENT_TYPE_STAGE_CHANGE = 3,
                        EVENT_TYPE_SEVERITY_CHANGE = 4,
                        EVENT_TYPE_ANNOTATION_ADD = 5,
                        EVENT_TYPE_ANNOTATION_CHANGE = 6
                    }
                }

                /** Represents an IncidentService */
                class IncidentService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new IncidentService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new IncidentService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IncidentService;

                    /**
                     * Calls CreateIncident.
                     * @param request CreateIncidentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Incident
                     */
                    public createIncident(request: google.cloud.irm.v1alpha2.ICreateIncidentRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateIncidentCallback): void;

                    /**
                     * Calls CreateIncident.
                     * @param request CreateIncidentRequest message or plain object
                     * @returns Promise
                     */
                    public createIncident(request: google.cloud.irm.v1alpha2.ICreateIncidentRequest): Promise<google.cloud.irm.v1alpha2.Incident>;

                    /**
                     * Calls GetIncident.
                     * @param request GetIncidentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Incident
                     */
                    public getIncident(request: google.cloud.irm.v1alpha2.IGetIncidentRequest, callback: google.cloud.irm.v1alpha2.IncidentService.GetIncidentCallback): void;

                    /**
                     * Calls GetIncident.
                     * @param request GetIncidentRequest message or plain object
                     * @returns Promise
                     */
                    public getIncident(request: google.cloud.irm.v1alpha2.IGetIncidentRequest): Promise<google.cloud.irm.v1alpha2.Incident>;

                    /**
                     * Calls SearchIncidents.
                     * @param request SearchIncidentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchIncidentsResponse
                     */
                    public searchIncidents(request: google.cloud.irm.v1alpha2.ISearchIncidentsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.SearchIncidentsCallback): void;

                    /**
                     * Calls SearchIncidents.
                     * @param request SearchIncidentsRequest message or plain object
                     * @returns Promise
                     */
                    public searchIncidents(request: google.cloud.irm.v1alpha2.ISearchIncidentsRequest): Promise<google.cloud.irm.v1alpha2.SearchIncidentsResponse>;

                    /**
                     * Calls UpdateIncident.
                     * @param request UpdateIncidentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Incident
                     */
                    public updateIncident(request: google.cloud.irm.v1alpha2.IUpdateIncidentRequest, callback: google.cloud.irm.v1alpha2.IncidentService.UpdateIncidentCallback): void;

                    /**
                     * Calls UpdateIncident.
                     * @param request UpdateIncidentRequest message or plain object
                     * @returns Promise
                     */
                    public updateIncident(request: google.cloud.irm.v1alpha2.IUpdateIncidentRequest): Promise<google.cloud.irm.v1alpha2.Incident>;

                    /**
                     * Calls SearchSimilarIncidents.
                     * @param request SearchSimilarIncidentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchSimilarIncidentsResponse
                     */
                    public searchSimilarIncidents(request: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.SearchSimilarIncidentsCallback): void;

                    /**
                     * Calls SearchSimilarIncidents.
                     * @param request SearchSimilarIncidentsRequest message or plain object
                     * @returns Promise
                     */
                    public searchSimilarIncidents(request: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsRequest): Promise<google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse>;

                    /**
                     * Calls CreateAnnotation.
                     * @param request CreateAnnotationRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Annotation
                     */
                    public createAnnotation(request: google.cloud.irm.v1alpha2.ICreateAnnotationRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateAnnotationCallback): void;

                    /**
                     * Calls CreateAnnotation.
                     * @param request CreateAnnotationRequest message or plain object
                     * @returns Promise
                     */
                    public createAnnotation(request: google.cloud.irm.v1alpha2.ICreateAnnotationRequest): Promise<google.cloud.irm.v1alpha2.Annotation>;

                    /**
                     * Calls ListAnnotations.
                     * @param request ListAnnotationsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAnnotationsResponse
                     */
                    public listAnnotations(request: google.cloud.irm.v1alpha2.IListAnnotationsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ListAnnotationsCallback): void;

                    /**
                     * Calls ListAnnotations.
                     * @param request ListAnnotationsRequest message or plain object
                     * @returns Promise
                     */
                    public listAnnotations(request: google.cloud.irm.v1alpha2.IListAnnotationsRequest): Promise<google.cloud.irm.v1alpha2.ListAnnotationsResponse>;

                    /**
                     * Calls CreateTag.
                     * @param request CreateTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Tag
                     */
                    public createTag(request: google.cloud.irm.v1alpha2.ICreateTagRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateTagCallback): void;

                    /**
                     * Calls CreateTag.
                     * @param request CreateTagRequest message or plain object
                     * @returns Promise
                     */
                    public createTag(request: google.cloud.irm.v1alpha2.ICreateTagRequest): Promise<google.cloud.irm.v1alpha2.Tag>;

                    /**
                     * Calls DeleteTag.
                     * @param request DeleteTagRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteTag(request: google.cloud.irm.v1alpha2.IDeleteTagRequest, callback: google.cloud.irm.v1alpha2.IncidentService.DeleteTagCallback): void;

                    /**
                     * Calls DeleteTag.
                     * @param request DeleteTagRequest message or plain object
                     * @returns Promise
                     */
                    public deleteTag(request: google.cloud.irm.v1alpha2.IDeleteTagRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListTags.
                     * @param request ListTagsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListTagsResponse
                     */
                    public listTags(request: google.cloud.irm.v1alpha2.IListTagsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ListTagsCallback): void;

                    /**
                     * Calls ListTags.
                     * @param request ListTagsRequest message or plain object
                     * @returns Promise
                     */
                    public listTags(request: google.cloud.irm.v1alpha2.IListTagsRequest): Promise<google.cloud.irm.v1alpha2.ListTagsResponse>;

                    /**
                     * Calls CreateSignal.
                     * @param request CreateSignalRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Signal
                     */
                    public createSignal(request: google.cloud.irm.v1alpha2.ICreateSignalRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateSignalCallback): void;

                    /**
                     * Calls CreateSignal.
                     * @param request CreateSignalRequest message or plain object
                     * @returns Promise
                     */
                    public createSignal(request: google.cloud.irm.v1alpha2.ICreateSignalRequest): Promise<google.cloud.irm.v1alpha2.Signal>;

                    /**
                     * Calls SearchSignals.
                     * @param request SearchSignalsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchSignalsResponse
                     */
                    public searchSignals(request: google.cloud.irm.v1alpha2.ISearchSignalsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.SearchSignalsCallback): void;

                    /**
                     * Calls SearchSignals.
                     * @param request SearchSignalsRequest message or plain object
                     * @returns Promise
                     */
                    public searchSignals(request: google.cloud.irm.v1alpha2.ISearchSignalsRequest): Promise<google.cloud.irm.v1alpha2.SearchSignalsResponse>;

                    /**
                     * Calls LookupSignal.
                     * @param request LookupSignalRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Signal
                     */
                    public lookupSignal(request: google.cloud.irm.v1alpha2.ILookupSignalRequest, callback: google.cloud.irm.v1alpha2.IncidentService.LookupSignalCallback): void;

                    /**
                     * Calls LookupSignal.
                     * @param request LookupSignalRequest message or plain object
                     * @returns Promise
                     */
                    public lookupSignal(request: google.cloud.irm.v1alpha2.ILookupSignalRequest): Promise<google.cloud.irm.v1alpha2.Signal>;

                    /**
                     * Calls GetSignal.
                     * @param request GetSignalRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Signal
                     */
                    public getSignal(request: google.cloud.irm.v1alpha2.IGetSignalRequest, callback: google.cloud.irm.v1alpha2.IncidentService.GetSignalCallback): void;

                    /**
                     * Calls GetSignal.
                     * @param request GetSignalRequest message or plain object
                     * @returns Promise
                     */
                    public getSignal(request: google.cloud.irm.v1alpha2.IGetSignalRequest): Promise<google.cloud.irm.v1alpha2.Signal>;

                    /**
                     * Calls UpdateSignal.
                     * @param request UpdateSignalRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Signal
                     */
                    public updateSignal(request: google.cloud.irm.v1alpha2.IUpdateSignalRequest, callback: google.cloud.irm.v1alpha2.IncidentService.UpdateSignalCallback): void;

                    /**
                     * Calls UpdateSignal.
                     * @param request UpdateSignalRequest message or plain object
                     * @returns Promise
                     */
                    public updateSignal(request: google.cloud.irm.v1alpha2.IUpdateSignalRequest): Promise<google.cloud.irm.v1alpha2.Signal>;

                    /**
                     * Calls EscalateIncident.
                     * @param request EscalateIncidentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and EscalateIncidentResponse
                     */
                    public escalateIncident(request: google.cloud.irm.v1alpha2.IEscalateIncidentRequest, callback: google.cloud.irm.v1alpha2.IncidentService.EscalateIncidentCallback): void;

                    /**
                     * Calls EscalateIncident.
                     * @param request EscalateIncidentRequest message or plain object
                     * @returns Promise
                     */
                    public escalateIncident(request: google.cloud.irm.v1alpha2.IEscalateIncidentRequest): Promise<google.cloud.irm.v1alpha2.EscalateIncidentResponse>;

                    /**
                     * Calls CreateArtifact.
                     * @param request CreateArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Artifact
                     */
                    public createArtifact(request: google.cloud.irm.v1alpha2.ICreateArtifactRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateArtifactCallback): void;

                    /**
                     * Calls CreateArtifact.
                     * @param request CreateArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public createArtifact(request: google.cloud.irm.v1alpha2.ICreateArtifactRequest): Promise<google.cloud.irm.v1alpha2.Artifact>;

                    /**
                     * Calls ListArtifacts.
                     * @param request ListArtifactsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListArtifactsResponse
                     */
                    public listArtifacts(request: google.cloud.irm.v1alpha2.IListArtifactsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ListArtifactsCallback): void;

                    /**
                     * Calls ListArtifacts.
                     * @param request ListArtifactsRequest message or plain object
                     * @returns Promise
                     */
                    public listArtifacts(request: google.cloud.irm.v1alpha2.IListArtifactsRequest): Promise<google.cloud.irm.v1alpha2.ListArtifactsResponse>;

                    /**
                     * Calls UpdateArtifact.
                     * @param request UpdateArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Artifact
                     */
                    public updateArtifact(request: google.cloud.irm.v1alpha2.IUpdateArtifactRequest, callback: google.cloud.irm.v1alpha2.IncidentService.UpdateArtifactCallback): void;

                    /**
                     * Calls UpdateArtifact.
                     * @param request UpdateArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public updateArtifact(request: google.cloud.irm.v1alpha2.IUpdateArtifactRequest): Promise<google.cloud.irm.v1alpha2.Artifact>;

                    /**
                     * Calls DeleteArtifact.
                     * @param request DeleteArtifactRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteArtifact(request: google.cloud.irm.v1alpha2.IDeleteArtifactRequest, callback: google.cloud.irm.v1alpha2.IncidentService.DeleteArtifactCallback): void;

                    /**
                     * Calls DeleteArtifact.
                     * @param request DeleteArtifactRequest message or plain object
                     * @returns Promise
                     */
                    public deleteArtifact(request: google.cloud.irm.v1alpha2.IDeleteArtifactRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls SendShiftHandoff.
                     * @param request SendShiftHandoffRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SendShiftHandoffResponse
                     */
                    public sendShiftHandoff(request: google.cloud.irm.v1alpha2.ISendShiftHandoffRequest, callback: google.cloud.irm.v1alpha2.IncidentService.SendShiftHandoffCallback): void;

                    /**
                     * Calls SendShiftHandoff.
                     * @param request SendShiftHandoffRequest message or plain object
                     * @returns Promise
                     */
                    public sendShiftHandoff(request: google.cloud.irm.v1alpha2.ISendShiftHandoffRequest): Promise<google.cloud.irm.v1alpha2.SendShiftHandoffResponse>;

                    /**
                     * Calls CreateSubscription.
                     * @param request CreateSubscriptionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Subscription
                     */
                    public createSubscription(request: google.cloud.irm.v1alpha2.ICreateSubscriptionRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateSubscriptionCallback): void;

                    /**
                     * Calls CreateSubscription.
                     * @param request CreateSubscriptionRequest message or plain object
                     * @returns Promise
                     */
                    public createSubscription(request: google.cloud.irm.v1alpha2.ICreateSubscriptionRequest): Promise<google.cloud.irm.v1alpha2.Subscription>;

                    /**
                     * Calls UpdateSubscription.
                     * @param request UpdateSubscriptionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Subscription
                     */
                    public updateSubscription(request: google.cloud.irm.v1alpha2.IUpdateSubscriptionRequest, callback: google.cloud.irm.v1alpha2.IncidentService.UpdateSubscriptionCallback): void;

                    /**
                     * Calls UpdateSubscription.
                     * @param request UpdateSubscriptionRequest message or plain object
                     * @returns Promise
                     */
                    public updateSubscription(request: google.cloud.irm.v1alpha2.IUpdateSubscriptionRequest): Promise<google.cloud.irm.v1alpha2.Subscription>;

                    /**
                     * Calls ListSubscriptions.
                     * @param request ListSubscriptionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSubscriptionsResponse
                     */
                    public listSubscriptions(request: google.cloud.irm.v1alpha2.IListSubscriptionsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ListSubscriptionsCallback): void;

                    /**
                     * Calls ListSubscriptions.
                     * @param request ListSubscriptionsRequest message or plain object
                     * @returns Promise
                     */
                    public listSubscriptions(request: google.cloud.irm.v1alpha2.IListSubscriptionsRequest): Promise<google.cloud.irm.v1alpha2.ListSubscriptionsResponse>;

                    /**
                     * Calls DeleteSubscription.
                     * @param request DeleteSubscriptionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteSubscription(request: google.cloud.irm.v1alpha2.IDeleteSubscriptionRequest, callback: google.cloud.irm.v1alpha2.IncidentService.DeleteSubscriptionCallback): void;

                    /**
                     * Calls DeleteSubscription.
                     * @param request DeleteSubscriptionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteSubscription(request: google.cloud.irm.v1alpha2.IDeleteSubscriptionRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls CreateIncidentRoleAssignment.
                     * @param request CreateIncidentRoleAssignmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IncidentRoleAssignment
                     */
                    public createIncidentRoleAssignment(request: google.cloud.irm.v1alpha2.ICreateIncidentRoleAssignmentRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CreateIncidentRoleAssignmentCallback): void;

                    /**
                     * Calls CreateIncidentRoleAssignment.
                     * @param request CreateIncidentRoleAssignmentRequest message or plain object
                     * @returns Promise
                     */
                    public createIncidentRoleAssignment(request: google.cloud.irm.v1alpha2.ICreateIncidentRoleAssignmentRequest): Promise<google.cloud.irm.v1alpha2.IncidentRoleAssignment>;

                    /**
                     * Calls DeleteIncidentRoleAssignment.
                     * @param request DeleteIncidentRoleAssignmentRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteIncidentRoleAssignment(request: google.cloud.irm.v1alpha2.IDeleteIncidentRoleAssignmentRequest, callback: google.cloud.irm.v1alpha2.IncidentService.DeleteIncidentRoleAssignmentCallback): void;

                    /**
                     * Calls DeleteIncidentRoleAssignment.
                     * @param request DeleteIncidentRoleAssignmentRequest message or plain object
                     * @returns Promise
                     */
                    public deleteIncidentRoleAssignment(request: google.cloud.irm.v1alpha2.IDeleteIncidentRoleAssignmentRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls ListIncidentRoleAssignments.
                     * @param request ListIncidentRoleAssignmentsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListIncidentRoleAssignmentsResponse
                     */
                    public listIncidentRoleAssignments(request: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ListIncidentRoleAssignmentsCallback): void;

                    /**
                     * Calls ListIncidentRoleAssignments.
                     * @param request ListIncidentRoleAssignmentsRequest message or plain object
                     * @returns Promise
                     */
                    public listIncidentRoleAssignments(request: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsRequest): Promise<google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse>;

                    /**
                     * Calls RequestIncidentRoleHandover.
                     * @param request RequestIncidentRoleHandoverRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IncidentRoleAssignment
                     */
                    public requestIncidentRoleHandover(request: google.cloud.irm.v1alpha2.IRequestIncidentRoleHandoverRequest, callback: google.cloud.irm.v1alpha2.IncidentService.RequestIncidentRoleHandoverCallback): void;

                    /**
                     * Calls RequestIncidentRoleHandover.
                     * @param request RequestIncidentRoleHandoverRequest message or plain object
                     * @returns Promise
                     */
                    public requestIncidentRoleHandover(request: google.cloud.irm.v1alpha2.IRequestIncidentRoleHandoverRequest): Promise<google.cloud.irm.v1alpha2.IncidentRoleAssignment>;

                    /**
                     * Calls ConfirmIncidentRoleHandover.
                     * @param request ConfirmIncidentRoleHandoverRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IncidentRoleAssignment
                     */
                    public confirmIncidentRoleHandover(request: google.cloud.irm.v1alpha2.IConfirmIncidentRoleHandoverRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ConfirmIncidentRoleHandoverCallback): void;

                    /**
                     * Calls ConfirmIncidentRoleHandover.
                     * @param request ConfirmIncidentRoleHandoverRequest message or plain object
                     * @returns Promise
                     */
                    public confirmIncidentRoleHandover(request: google.cloud.irm.v1alpha2.IConfirmIncidentRoleHandoverRequest): Promise<google.cloud.irm.v1alpha2.IncidentRoleAssignment>;

                    /**
                     * Calls ForceIncidentRoleHandover.
                     * @param request ForceIncidentRoleHandoverRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IncidentRoleAssignment
                     */
                    public forceIncidentRoleHandover(request: google.cloud.irm.v1alpha2.IForceIncidentRoleHandoverRequest, callback: google.cloud.irm.v1alpha2.IncidentService.ForceIncidentRoleHandoverCallback): void;

                    /**
                     * Calls ForceIncidentRoleHandover.
                     * @param request ForceIncidentRoleHandoverRequest message or plain object
                     * @returns Promise
                     */
                    public forceIncidentRoleHandover(request: google.cloud.irm.v1alpha2.IForceIncidentRoleHandoverRequest): Promise<google.cloud.irm.v1alpha2.IncidentRoleAssignment>;

                    /**
                     * Calls CancelIncidentRoleHandover.
                     * @param request CancelIncidentRoleHandoverRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and IncidentRoleAssignment
                     */
                    public cancelIncidentRoleHandover(request: google.cloud.irm.v1alpha2.ICancelIncidentRoleHandoverRequest, callback: google.cloud.irm.v1alpha2.IncidentService.CancelIncidentRoleHandoverCallback): void;

                    /**
                     * Calls CancelIncidentRoleHandover.
                     * @param request CancelIncidentRoleHandoverRequest message or plain object
                     * @returns Promise
                     */
                    public cancelIncidentRoleHandover(request: google.cloud.irm.v1alpha2.ICancelIncidentRoleHandoverRequest): Promise<google.cloud.irm.v1alpha2.IncidentRoleAssignment>;
                }

                namespace IncidentService {

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createIncident}.
                     * @param error Error, if any
                     * @param [response] Incident
                     */
                    type CreateIncidentCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Incident) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#getIncident}.
                     * @param error Error, if any
                     * @param [response] Incident
                     */
                    type GetIncidentCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Incident) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#searchIncidents}.
                     * @param error Error, if any
                     * @param [response] SearchIncidentsResponse
                     */
                    type SearchIncidentsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.SearchIncidentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#updateIncident}.
                     * @param error Error, if any
                     * @param [response] Incident
                     */
                    type UpdateIncidentCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Incident) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#searchSimilarIncidents}.
                     * @param error Error, if any
                     * @param [response] SearchSimilarIncidentsResponse
                     */
                    type SearchSimilarIncidentsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createAnnotation}.
                     * @param error Error, if any
                     * @param [response] Annotation
                     */
                    type CreateAnnotationCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Annotation) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#listAnnotations}.
                     * @param error Error, if any
                     * @param [response] ListAnnotationsResponse
                     */
                    type ListAnnotationsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.ListAnnotationsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createTag}.
                     * @param error Error, if any
                     * @param [response] Tag
                     */
                    type CreateTagCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Tag) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#deleteTag}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteTagCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#listTags}.
                     * @param error Error, if any
                     * @param [response] ListTagsResponse
                     */
                    type ListTagsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.ListTagsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createSignal}.
                     * @param error Error, if any
                     * @param [response] Signal
                     */
                    type CreateSignalCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Signal) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#searchSignals}.
                     * @param error Error, if any
                     * @param [response] SearchSignalsResponse
                     */
                    type SearchSignalsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.SearchSignalsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#lookupSignal}.
                     * @param error Error, if any
                     * @param [response] Signal
                     */
                    type LookupSignalCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Signal) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#getSignal}.
                     * @param error Error, if any
                     * @param [response] Signal
                     */
                    type GetSignalCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Signal) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#updateSignal}.
                     * @param error Error, if any
                     * @param [response] Signal
                     */
                    type UpdateSignalCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Signal) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#escalateIncident}.
                     * @param error Error, if any
                     * @param [response] EscalateIncidentResponse
                     */
                    type EscalateIncidentCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.EscalateIncidentResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createArtifact}.
                     * @param error Error, if any
                     * @param [response] Artifact
                     */
                    type CreateArtifactCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Artifact) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#listArtifacts}.
                     * @param error Error, if any
                     * @param [response] ListArtifactsResponse
                     */
                    type ListArtifactsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.ListArtifactsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#updateArtifact}.
                     * @param error Error, if any
                     * @param [response] Artifact
                     */
                    type UpdateArtifactCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Artifact) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#deleteArtifact}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteArtifactCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#sendShiftHandoff}.
                     * @param error Error, if any
                     * @param [response] SendShiftHandoffResponse
                     */
                    type SendShiftHandoffCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.SendShiftHandoffResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createSubscription}.
                     * @param error Error, if any
                     * @param [response] Subscription
                     */
                    type CreateSubscriptionCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Subscription) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#updateSubscription}.
                     * @param error Error, if any
                     * @param [response] Subscription
                     */
                    type UpdateSubscriptionCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.Subscription) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#listSubscriptions}.
                     * @param error Error, if any
                     * @param [response] ListSubscriptionsResponse
                     */
                    type ListSubscriptionsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.ListSubscriptionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#deleteSubscription}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteSubscriptionCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#createIncidentRoleAssignment}.
                     * @param error Error, if any
                     * @param [response] IncidentRoleAssignment
                     */
                    type CreateIncidentRoleAssignmentCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.IncidentRoleAssignment) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#deleteIncidentRoleAssignment}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteIncidentRoleAssignmentCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#listIncidentRoleAssignments}.
                     * @param error Error, if any
                     * @param [response] ListIncidentRoleAssignmentsResponse
                     */
                    type ListIncidentRoleAssignmentsCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#requestIncidentRoleHandover}.
                     * @param error Error, if any
                     * @param [response] IncidentRoleAssignment
                     */
                    type RequestIncidentRoleHandoverCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.IncidentRoleAssignment) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#confirmIncidentRoleHandover}.
                     * @param error Error, if any
                     * @param [response] IncidentRoleAssignment
                     */
                    type ConfirmIncidentRoleHandoverCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.IncidentRoleAssignment) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#forceIncidentRoleHandover}.
                     * @param error Error, if any
                     * @param [response] IncidentRoleAssignment
                     */
                    type ForceIncidentRoleHandoverCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.IncidentRoleAssignment) => void;

                    /**
                     * Callback as used by {@link google.cloud.irm.v1alpha2.IncidentService#cancelIncidentRoleHandover}.
                     * @param error Error, if any
                     * @param [response] IncidentRoleAssignment
                     */
                    type CancelIncidentRoleHandoverCallback = (error: (Error|null), response?: google.cloud.irm.v1alpha2.IncidentRoleAssignment) => void;
                }

                /** Properties of a CreateIncidentRequest. */
                interface ICreateIncidentRequest {

                    /** CreateIncidentRequest incident */
                    incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** CreateIncidentRequest parent */
                    parent?: (string|null);
                }

                /** Represents a CreateIncidentRequest. */
                class CreateIncidentRequest implements ICreateIncidentRequest {

                    /**
                     * Constructs a new CreateIncidentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateIncidentRequest);

                    /** CreateIncidentRequest incident. */
                    public incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** CreateIncidentRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new CreateIncidentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateIncidentRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateIncidentRequest): google.cloud.irm.v1alpha2.CreateIncidentRequest;

                    /**
                     * Encodes the specified CreateIncidentRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateIncidentRequest.verify|verify} messages.
                     * @param message CreateIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateIncidentRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateIncidentRequest.verify|verify} messages.
                     * @param message CreateIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateIncidentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateIncidentRequest;

                    /**
                     * Decodes a CreateIncidentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateIncidentRequest;

                    /**
                     * Verifies a CreateIncidentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateIncidentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateIncidentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateIncidentRequest;

                    /**
                     * Creates a plain object from a CreateIncidentRequest message. Also converts values to other types if specified.
                     * @param message CreateIncidentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateIncidentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateIncidentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetIncidentRequest. */
                interface IGetIncidentRequest {

                    /** GetIncidentRequest name */
                    name?: (string|null);
                }

                /** Represents a GetIncidentRequest. */
                class GetIncidentRequest implements IGetIncidentRequest {

                    /**
                     * Constructs a new GetIncidentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IGetIncidentRequest);

                    /** GetIncidentRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetIncidentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetIncidentRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IGetIncidentRequest): google.cloud.irm.v1alpha2.GetIncidentRequest;

                    /**
                     * Encodes the specified GetIncidentRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.GetIncidentRequest.verify|verify} messages.
                     * @param message GetIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IGetIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetIncidentRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.GetIncidentRequest.verify|verify} messages.
                     * @param message GetIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IGetIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetIncidentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.GetIncidentRequest;

                    /**
                     * Decodes a GetIncidentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.GetIncidentRequest;

                    /**
                     * Verifies a GetIncidentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetIncidentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetIncidentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.GetIncidentRequest;

                    /**
                     * Creates a plain object from a GetIncidentRequest message. Also converts values to other types if specified.
                     * @param message GetIncidentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.GetIncidentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetIncidentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateIncidentRequest. */
                interface IUpdateIncidentRequest {

                    /** UpdateIncidentRequest incident */
                    incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** UpdateIncidentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateIncidentRequest. */
                class UpdateIncidentRequest implements IUpdateIncidentRequest {

                    /**
                     * Constructs a new UpdateIncidentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IUpdateIncidentRequest);

                    /** UpdateIncidentRequest incident. */
                    public incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** UpdateIncidentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateIncidentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateIncidentRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IUpdateIncidentRequest): google.cloud.irm.v1alpha2.UpdateIncidentRequest;

                    /**
                     * Encodes the specified UpdateIncidentRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateIncidentRequest.verify|verify} messages.
                     * @param message UpdateIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IUpdateIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateIncidentRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateIncidentRequest.verify|verify} messages.
                     * @param message UpdateIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IUpdateIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateIncidentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.UpdateIncidentRequest;

                    /**
                     * Decodes an UpdateIncidentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.UpdateIncidentRequest;

                    /**
                     * Verifies an UpdateIncidentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateIncidentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateIncidentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.UpdateIncidentRequest;

                    /**
                     * Creates a plain object from an UpdateIncidentRequest message. Also converts values to other types if specified.
                     * @param message UpdateIncidentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.UpdateIncidentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateIncidentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchSimilarIncidentsRequest. */
                interface ISearchSimilarIncidentsRequest {

                    /** SearchSimilarIncidentsRequest name */
                    name?: (string|null);

                    /** SearchSimilarIncidentsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchSimilarIncidentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchSimilarIncidentsRequest. */
                class SearchSimilarIncidentsRequest implements ISearchSimilarIncidentsRequest {

                    /**
                     * Constructs a new SearchSimilarIncidentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsRequest);

                    /** SearchSimilarIncidentsRequest name. */
                    public name: string;

                    /** SearchSimilarIncidentsRequest pageSize. */
                    public pageSize: number;

                    /** SearchSimilarIncidentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchSimilarIncidentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchSimilarIncidentsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsRequest): google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest;

                    /**
                     * Encodes the specified SearchSimilarIncidentsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.verify|verify} messages.
                     * @param message SearchSimilarIncidentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchSimilarIncidentsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest.verify|verify} messages.
                     * @param message SearchSimilarIncidentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchSimilarIncidentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchSimilarIncidentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest;

                    /**
                     * Decodes a SearchSimilarIncidentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchSimilarIncidentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest;

                    /**
                     * Verifies a SearchSimilarIncidentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchSimilarIncidentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchSimilarIncidentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest;

                    /**
                     * Creates a plain object from a SearchSimilarIncidentsRequest message. Also converts values to other types if specified.
                     * @param message SearchSimilarIncidentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchSimilarIncidentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchSimilarIncidentsResponse. */
                interface ISearchSimilarIncidentsResponse {

                    /** SearchSimilarIncidentsResponse results */
                    results?: (google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.IResult[]|null);

                    /** SearchSimilarIncidentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchSimilarIncidentsResponse. */
                class SearchSimilarIncidentsResponse implements ISearchSimilarIncidentsResponse {

                    /**
                     * Constructs a new SearchSimilarIncidentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsResponse);

                    /** SearchSimilarIncidentsResponse results. */
                    public results: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.IResult[];

                    /** SearchSimilarIncidentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchSimilarIncidentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchSimilarIncidentsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsResponse): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse;

                    /**
                     * Encodes the specified SearchSimilarIncidentsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.verify|verify} messages.
                     * @param message SearchSimilarIncidentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchSimilarIncidentsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.verify|verify} messages.
                     * @param message SearchSimilarIncidentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISearchSimilarIncidentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchSimilarIncidentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchSimilarIncidentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse;

                    /**
                     * Decodes a SearchSimilarIncidentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchSimilarIncidentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse;

                    /**
                     * Verifies a SearchSimilarIncidentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchSimilarIncidentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchSimilarIncidentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse;

                    /**
                     * Creates a plain object from a SearchSimilarIncidentsResponse message. Also converts values to other types if specified.
                     * @param message SearchSimilarIncidentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchSimilarIncidentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SearchSimilarIncidentsResponse {

                    /** Properties of a Result. */
                    interface IResult {

                        /** Result incident */
                        incident?: (google.cloud.irm.v1alpha2.IIncident|null);
                    }

                    /** Represents a Result. */
                    class Result implements IResult {

                        /**
                         * Constructs a new Result.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.IResult);

                        /** Result incident. */
                        public incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                        /**
                         * Creates a new Result instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Result instance
                         */
                        public static create(properties?: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.IResult): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result;

                        /**
                         * Encodes the specified Result message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.verify|verify} messages.
                         * @param message Result message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Result message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result.verify|verify} messages.
                         * @param message Result message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Result message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Result
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result;

                        /**
                         * Decodes a Result message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Result
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result;

                        /**
                         * Verifies a Result message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Result message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Result
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result;

                        /**
                         * Creates a plain object from a Result message. Also converts values to other types if specified.
                         * @param message Result
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Result to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CreateAnnotationRequest. */
                interface ICreateAnnotationRequest {

                    /** CreateAnnotationRequest parent */
                    parent?: (string|null);

                    /** CreateAnnotationRequest annotation */
                    annotation?: (google.cloud.irm.v1alpha2.IAnnotation|null);
                }

                /** Represents a CreateAnnotationRequest. */
                class CreateAnnotationRequest implements ICreateAnnotationRequest {

                    /**
                     * Constructs a new CreateAnnotationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateAnnotationRequest);

                    /** CreateAnnotationRequest parent. */
                    public parent: string;

                    /** CreateAnnotationRequest annotation. */
                    public annotation?: (google.cloud.irm.v1alpha2.IAnnotation|null);

                    /**
                     * Creates a new CreateAnnotationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateAnnotationRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateAnnotationRequest): google.cloud.irm.v1alpha2.CreateAnnotationRequest;

                    /**
                     * Encodes the specified CreateAnnotationRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateAnnotationRequest.verify|verify} messages.
                     * @param message CreateAnnotationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateAnnotationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateAnnotationRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateAnnotationRequest.verify|verify} messages.
                     * @param message CreateAnnotationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateAnnotationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateAnnotationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateAnnotationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateAnnotationRequest;

                    /**
                     * Decodes a CreateAnnotationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateAnnotationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateAnnotationRequest;

                    /**
                     * Verifies a CreateAnnotationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateAnnotationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateAnnotationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateAnnotationRequest;

                    /**
                     * Creates a plain object from a CreateAnnotationRequest message. Also converts values to other types if specified.
                     * @param message CreateAnnotationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateAnnotationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateAnnotationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnnotationsRequest. */
                interface IListAnnotationsRequest {

                    /** ListAnnotationsRequest parent */
                    parent?: (string|null);

                    /** ListAnnotationsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAnnotationsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAnnotationsRequest. */
                class ListAnnotationsRequest implements IListAnnotationsRequest {

                    /**
                     * Constructs a new ListAnnotationsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListAnnotationsRequest);

                    /** ListAnnotationsRequest parent. */
                    public parent: string;

                    /** ListAnnotationsRequest pageSize. */
                    public pageSize: number;

                    /** ListAnnotationsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAnnotationsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnnotationsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListAnnotationsRequest): google.cloud.irm.v1alpha2.ListAnnotationsRequest;

                    /**
                     * Encodes the specified ListAnnotationsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListAnnotationsRequest.verify|verify} messages.
                     * @param message ListAnnotationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListAnnotationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnnotationsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListAnnotationsRequest.verify|verify} messages.
                     * @param message ListAnnotationsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListAnnotationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnnotationsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnnotationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListAnnotationsRequest;

                    /**
                     * Decodes a ListAnnotationsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnnotationsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListAnnotationsRequest;

                    /**
                     * Verifies a ListAnnotationsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnnotationsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnnotationsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListAnnotationsRequest;

                    /**
                     * Creates a plain object from a ListAnnotationsRequest message. Also converts values to other types if specified.
                     * @param message ListAnnotationsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListAnnotationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnnotationsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAnnotationsResponse. */
                interface IListAnnotationsResponse {

                    /** ListAnnotationsResponse annotations */
                    annotations?: (google.cloud.irm.v1alpha2.IAnnotation[]|null);

                    /** ListAnnotationsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAnnotationsResponse. */
                class ListAnnotationsResponse implements IListAnnotationsResponse {

                    /**
                     * Constructs a new ListAnnotationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListAnnotationsResponse);

                    /** ListAnnotationsResponse annotations. */
                    public annotations: google.cloud.irm.v1alpha2.IAnnotation[];

                    /** ListAnnotationsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAnnotationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAnnotationsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListAnnotationsResponse): google.cloud.irm.v1alpha2.ListAnnotationsResponse;

                    /**
                     * Encodes the specified ListAnnotationsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListAnnotationsResponse.verify|verify} messages.
                     * @param message ListAnnotationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListAnnotationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAnnotationsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListAnnotationsResponse.verify|verify} messages.
                     * @param message ListAnnotationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListAnnotationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAnnotationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAnnotationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListAnnotationsResponse;

                    /**
                     * Decodes a ListAnnotationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAnnotationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListAnnotationsResponse;

                    /**
                     * Verifies a ListAnnotationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAnnotationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAnnotationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListAnnotationsResponse;

                    /**
                     * Creates a plain object from a ListAnnotationsResponse message. Also converts values to other types if specified.
                     * @param message ListAnnotationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListAnnotationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAnnotationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTagRequest. */
                interface ICreateTagRequest {

                    /** CreateTagRequest parent */
                    parent?: (string|null);

                    /** CreateTagRequest tag */
                    tag?: (google.cloud.irm.v1alpha2.ITag|null);
                }

                /** Represents a CreateTagRequest. */
                class CreateTagRequest implements ICreateTagRequest {

                    /**
                     * Constructs a new CreateTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateTagRequest);

                    /** CreateTagRequest parent. */
                    public parent: string;

                    /** CreateTagRequest tag. */
                    public tag?: (google.cloud.irm.v1alpha2.ITag|null);

                    /**
                     * Creates a new CreateTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTagRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateTagRequest): google.cloud.irm.v1alpha2.CreateTagRequest;

                    /**
                     * Encodes the specified CreateTagRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateTagRequest.verify|verify} messages.
                     * @param message CreateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTagRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateTagRequest.verify|verify} messages.
                     * @param message CreateTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateTagRequest;

                    /**
                     * Decodes a CreateTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateTagRequest;

                    /**
                     * Verifies a CreateTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateTagRequest;

                    /**
                     * Creates a plain object from a CreateTagRequest message. Also converts values to other types if specified.
                     * @param message CreateTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteTagRequest. */
                interface IDeleteTagRequest {

                    /** DeleteTagRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteTagRequest. */
                class DeleteTagRequest implements IDeleteTagRequest {

                    /**
                     * Constructs a new DeleteTagRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IDeleteTagRequest);

                    /** DeleteTagRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteTagRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteTagRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IDeleteTagRequest): google.cloud.irm.v1alpha2.DeleteTagRequest;

                    /**
                     * Encodes the specified DeleteTagRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteTagRequest.verify|verify} messages.
                     * @param message DeleteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IDeleteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteTagRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteTagRequest.verify|verify} messages.
                     * @param message DeleteTagRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IDeleteTagRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteTagRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.DeleteTagRequest;

                    /**
                     * Decodes a DeleteTagRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteTagRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.DeleteTagRequest;

                    /**
                     * Verifies a DeleteTagRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteTagRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteTagRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.DeleteTagRequest;

                    /**
                     * Creates a plain object from a DeleteTagRequest message. Also converts values to other types if specified.
                     * @param message DeleteTagRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.DeleteTagRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteTagRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTagsRequest. */
                interface IListTagsRequest {

                    /** ListTagsRequest parent */
                    parent?: (string|null);

                    /** ListTagsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListTagsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListTagsRequest. */
                class ListTagsRequest implements IListTagsRequest {

                    /**
                     * Constructs a new ListTagsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListTagsRequest);

                    /** ListTagsRequest parent. */
                    public parent: string;

                    /** ListTagsRequest pageSize. */
                    public pageSize: number;

                    /** ListTagsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListTagsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTagsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListTagsRequest): google.cloud.irm.v1alpha2.ListTagsRequest;

                    /**
                     * Encodes the specified ListTagsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListTagsRequest.verify|verify} messages.
                     * @param message ListTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTagsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListTagsRequest.verify|verify} messages.
                     * @param message ListTagsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTagsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListTagsRequest;

                    /**
                     * Decodes a ListTagsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTagsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListTagsRequest;

                    /**
                     * Verifies a ListTagsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTagsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTagsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListTagsRequest;

                    /**
                     * Creates a plain object from a ListTagsRequest message. Also converts values to other types if specified.
                     * @param message ListTagsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListTagsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTagsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTagsResponse. */
                interface IListTagsResponse {

                    /** ListTagsResponse tags */
                    tags?: (google.cloud.irm.v1alpha2.ITag[]|null);

                    /** ListTagsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListTagsResponse. */
                class ListTagsResponse implements IListTagsResponse {

                    /**
                     * Constructs a new ListTagsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListTagsResponse);

                    /** ListTagsResponse tags. */
                    public tags: google.cloud.irm.v1alpha2.ITag[];

                    /** ListTagsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListTagsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTagsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListTagsResponse): google.cloud.irm.v1alpha2.ListTagsResponse;

                    /**
                     * Encodes the specified ListTagsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListTagsResponse.verify|verify} messages.
                     * @param message ListTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTagsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListTagsResponse.verify|verify} messages.
                     * @param message ListTagsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTagsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListTagsResponse;

                    /**
                     * Decodes a ListTagsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTagsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListTagsResponse;

                    /**
                     * Verifies a ListTagsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTagsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTagsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListTagsResponse;

                    /**
                     * Creates a plain object from a ListTagsResponse message. Also converts values to other types if specified.
                     * @param message ListTagsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListTagsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTagsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateSignalRequest. */
                interface ICreateSignalRequest {

                    /** CreateSignalRequest parent */
                    parent?: (string|null);

                    /** CreateSignalRequest signal */
                    signal?: (google.cloud.irm.v1alpha2.ISignal|null);
                }

                /** Represents a CreateSignalRequest. */
                class CreateSignalRequest implements ICreateSignalRequest {

                    /**
                     * Constructs a new CreateSignalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateSignalRequest);

                    /** CreateSignalRequest parent. */
                    public parent: string;

                    /** CreateSignalRequest signal. */
                    public signal?: (google.cloud.irm.v1alpha2.ISignal|null);

                    /**
                     * Creates a new CreateSignalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSignalRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateSignalRequest): google.cloud.irm.v1alpha2.CreateSignalRequest;

                    /**
                     * Encodes the specified CreateSignalRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateSignalRequest.verify|verify} messages.
                     * @param message CreateSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSignalRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateSignalRequest.verify|verify} messages.
                     * @param message CreateSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSignalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateSignalRequest;

                    /**
                     * Decodes a CreateSignalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateSignalRequest;

                    /**
                     * Verifies a CreateSignalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSignalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSignalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateSignalRequest;

                    /**
                     * Creates a plain object from a CreateSignalRequest message. Also converts values to other types if specified.
                     * @param message CreateSignalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSignalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchSignalsRequest. */
                interface ISearchSignalsRequest {

                    /** SearchSignalsRequest parent */
                    parent?: (string|null);

                    /** SearchSignalsRequest query */
                    query?: (string|null);

                    /** SearchSignalsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchSignalsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchSignalsRequest. */
                class SearchSignalsRequest implements ISearchSignalsRequest {

                    /**
                     * Constructs a new SearchSignalsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISearchSignalsRequest);

                    /** SearchSignalsRequest parent. */
                    public parent: string;

                    /** SearchSignalsRequest query. */
                    public query: string;

                    /** SearchSignalsRequest pageSize. */
                    public pageSize: number;

                    /** SearchSignalsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchSignalsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchSignalsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISearchSignalsRequest): google.cloud.irm.v1alpha2.SearchSignalsRequest;

                    /**
                     * Encodes the specified SearchSignalsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSignalsRequest.verify|verify} messages.
                     * @param message SearchSignalsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISearchSignalsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchSignalsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSignalsRequest.verify|verify} messages.
                     * @param message SearchSignalsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISearchSignalsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchSignalsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchSignalsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchSignalsRequest;

                    /**
                     * Decodes a SearchSignalsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchSignalsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchSignalsRequest;

                    /**
                     * Verifies a SearchSignalsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchSignalsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchSignalsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchSignalsRequest;

                    /**
                     * Creates a plain object from a SearchSignalsRequest message. Also converts values to other types if specified.
                     * @param message SearchSignalsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SearchSignalsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchSignalsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchSignalsResponse. */
                interface ISearchSignalsResponse {

                    /** SearchSignalsResponse signals */
                    signals?: (google.cloud.irm.v1alpha2.ISignal[]|null);

                    /** SearchSignalsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchSignalsResponse. */
                class SearchSignalsResponse implements ISearchSignalsResponse {

                    /**
                     * Constructs a new SearchSignalsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISearchSignalsResponse);

                    /** SearchSignalsResponse signals. */
                    public signals: google.cloud.irm.v1alpha2.ISignal[];

                    /** SearchSignalsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchSignalsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchSignalsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISearchSignalsResponse): google.cloud.irm.v1alpha2.SearchSignalsResponse;

                    /**
                     * Encodes the specified SearchSignalsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSignalsResponse.verify|verify} messages.
                     * @param message SearchSignalsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISearchSignalsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchSignalsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchSignalsResponse.verify|verify} messages.
                     * @param message SearchSignalsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISearchSignalsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchSignalsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchSignalsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchSignalsResponse;

                    /**
                     * Decodes a SearchSignalsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchSignalsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchSignalsResponse;

                    /**
                     * Verifies a SearchSignalsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchSignalsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchSignalsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchSignalsResponse;

                    /**
                     * Creates a plain object from a SearchSignalsResponse message. Also converts values to other types if specified.
                     * @param message SearchSignalsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SearchSignalsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchSignalsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSignalRequest. */
                interface IGetSignalRequest {

                    /** GetSignalRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSignalRequest. */
                class GetSignalRequest implements IGetSignalRequest {

                    /**
                     * Constructs a new GetSignalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IGetSignalRequest);

                    /** GetSignalRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSignalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSignalRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IGetSignalRequest): google.cloud.irm.v1alpha2.GetSignalRequest;

                    /**
                     * Encodes the specified GetSignalRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.GetSignalRequest.verify|verify} messages.
                     * @param message GetSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IGetSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSignalRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.GetSignalRequest.verify|verify} messages.
                     * @param message GetSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IGetSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSignalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.GetSignalRequest;

                    /**
                     * Decodes a GetSignalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.GetSignalRequest;

                    /**
                     * Verifies a GetSignalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSignalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSignalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.GetSignalRequest;

                    /**
                     * Creates a plain object from a GetSignalRequest message. Also converts values to other types if specified.
                     * @param message GetSignalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.GetSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSignalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LookupSignalRequest. */
                interface ILookupSignalRequest {

                    /** LookupSignalRequest csccFinding */
                    csccFinding?: (string|null);

                    /** LookupSignalRequest stackdriverNotificationId */
                    stackdriverNotificationId?: (string|null);
                }

                /** Represents a LookupSignalRequest. */
                class LookupSignalRequest implements ILookupSignalRequest {

                    /**
                     * Constructs a new LookupSignalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ILookupSignalRequest);

                    /** LookupSignalRequest csccFinding. */
                    public csccFinding: string;

                    /** LookupSignalRequest stackdriverNotificationId. */
                    public stackdriverNotificationId: string;

                    /** LookupSignalRequest alternateId. */
                    public alternateId?: ("csccFinding"|"stackdriverNotificationId");

                    /**
                     * Creates a new LookupSignalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LookupSignalRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ILookupSignalRequest): google.cloud.irm.v1alpha2.LookupSignalRequest;

                    /**
                     * Encodes the specified LookupSignalRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.LookupSignalRequest.verify|verify} messages.
                     * @param message LookupSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ILookupSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LookupSignalRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.LookupSignalRequest.verify|verify} messages.
                     * @param message LookupSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ILookupSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LookupSignalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LookupSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.LookupSignalRequest;

                    /**
                     * Decodes a LookupSignalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LookupSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.LookupSignalRequest;

                    /**
                     * Verifies a LookupSignalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LookupSignalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LookupSignalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.LookupSignalRequest;

                    /**
                     * Creates a plain object from a LookupSignalRequest message. Also converts values to other types if specified.
                     * @param message LookupSignalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.LookupSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LookupSignalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSignalRequest. */
                interface IUpdateSignalRequest {

                    /** UpdateSignalRequest signal */
                    signal?: (google.cloud.irm.v1alpha2.ISignal|null);

                    /** UpdateSignalRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSignalRequest. */
                class UpdateSignalRequest implements IUpdateSignalRequest {

                    /**
                     * Constructs a new UpdateSignalRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IUpdateSignalRequest);

                    /** UpdateSignalRequest signal. */
                    public signal?: (google.cloud.irm.v1alpha2.ISignal|null);

                    /** UpdateSignalRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSignalRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSignalRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IUpdateSignalRequest): google.cloud.irm.v1alpha2.UpdateSignalRequest;

                    /**
                     * Encodes the specified UpdateSignalRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateSignalRequest.verify|verify} messages.
                     * @param message UpdateSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IUpdateSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSignalRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateSignalRequest.verify|verify} messages.
                     * @param message UpdateSignalRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IUpdateSignalRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSignalRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.UpdateSignalRequest;

                    /**
                     * Decodes an UpdateSignalRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSignalRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.UpdateSignalRequest;

                    /**
                     * Verifies an UpdateSignalRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSignalRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSignalRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.UpdateSignalRequest;

                    /**
                     * Creates a plain object from an UpdateSignalRequest message. Also converts values to other types if specified.
                     * @param message UpdateSignalRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.UpdateSignalRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSignalRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchIncidentsRequest. */
                interface ISearchIncidentsRequest {

                    /** SearchIncidentsRequest parent */
                    parent?: (string|null);

                    /** SearchIncidentsRequest query */
                    query?: (string|null);

                    /** SearchIncidentsRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchIncidentsRequest pageToken */
                    pageToken?: (string|null);

                    /** SearchIncidentsRequest timeZone */
                    timeZone?: (string|null);
                }

                /** Represents a SearchIncidentsRequest. */
                class SearchIncidentsRequest implements ISearchIncidentsRequest {

                    /**
                     * Constructs a new SearchIncidentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISearchIncidentsRequest);

                    /** SearchIncidentsRequest parent. */
                    public parent: string;

                    /** SearchIncidentsRequest query. */
                    public query: string;

                    /** SearchIncidentsRequest pageSize. */
                    public pageSize: number;

                    /** SearchIncidentsRequest pageToken. */
                    public pageToken: string;

                    /** SearchIncidentsRequest timeZone. */
                    public timeZone: string;

                    /**
                     * Creates a new SearchIncidentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchIncidentsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISearchIncidentsRequest): google.cloud.irm.v1alpha2.SearchIncidentsRequest;

                    /**
                     * Encodes the specified SearchIncidentsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchIncidentsRequest.verify|verify} messages.
                     * @param message SearchIncidentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISearchIncidentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchIncidentsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchIncidentsRequest.verify|verify} messages.
                     * @param message SearchIncidentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISearchIncidentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchIncidentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchIncidentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchIncidentsRequest;

                    /**
                     * Decodes a SearchIncidentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchIncidentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchIncidentsRequest;

                    /**
                     * Verifies a SearchIncidentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchIncidentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchIncidentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchIncidentsRequest;

                    /**
                     * Creates a plain object from a SearchIncidentsRequest message. Also converts values to other types if specified.
                     * @param message SearchIncidentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SearchIncidentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchIncidentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchIncidentsResponse. */
                interface ISearchIncidentsResponse {

                    /** SearchIncidentsResponse incidents */
                    incidents?: (google.cloud.irm.v1alpha2.IIncident[]|null);

                    /** SearchIncidentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchIncidentsResponse. */
                class SearchIncidentsResponse implements ISearchIncidentsResponse {

                    /**
                     * Constructs a new SearchIncidentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISearchIncidentsResponse);

                    /** SearchIncidentsResponse incidents. */
                    public incidents: google.cloud.irm.v1alpha2.IIncident[];

                    /** SearchIncidentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchIncidentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchIncidentsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISearchIncidentsResponse): google.cloud.irm.v1alpha2.SearchIncidentsResponse;

                    /**
                     * Encodes the specified SearchIncidentsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchIncidentsResponse.verify|verify} messages.
                     * @param message SearchIncidentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISearchIncidentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchIncidentsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SearchIncidentsResponse.verify|verify} messages.
                     * @param message SearchIncidentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISearchIncidentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchIncidentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchIncidentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SearchIncidentsResponse;

                    /**
                     * Decodes a SearchIncidentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchIncidentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SearchIncidentsResponse;

                    /**
                     * Verifies a SearchIncidentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchIncidentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchIncidentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SearchIncidentsResponse;

                    /**
                     * Creates a plain object from a SearchIncidentsResponse message. Also converts values to other types if specified.
                     * @param message SearchIncidentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SearchIncidentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchIncidentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EscalateIncidentRequest. */
                interface IEscalateIncidentRequest {

                    /** EscalateIncidentRequest incident */
                    incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** EscalateIncidentRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** EscalateIncidentRequest subscriptions */
                    subscriptions?: (google.cloud.irm.v1alpha2.ISubscription[]|null);

                    /** EscalateIncidentRequest tags */
                    tags?: (google.cloud.irm.v1alpha2.ITag[]|null);

                    /** EscalateIncidentRequest roles */
                    roles?: (google.cloud.irm.v1alpha2.IIncidentRoleAssignment[]|null);

                    /** EscalateIncidentRequest artifacts */
                    artifacts?: (google.cloud.irm.v1alpha2.IArtifact[]|null);
                }

                /** Represents an EscalateIncidentRequest. */
                class EscalateIncidentRequest implements IEscalateIncidentRequest {

                    /**
                     * Constructs a new EscalateIncidentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IEscalateIncidentRequest);

                    /** EscalateIncidentRequest incident. */
                    public incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** EscalateIncidentRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** EscalateIncidentRequest subscriptions. */
                    public subscriptions: google.cloud.irm.v1alpha2.ISubscription[];

                    /** EscalateIncidentRequest tags. */
                    public tags: google.cloud.irm.v1alpha2.ITag[];

                    /** EscalateIncidentRequest roles. */
                    public roles: google.cloud.irm.v1alpha2.IIncidentRoleAssignment[];

                    /** EscalateIncidentRequest artifacts. */
                    public artifacts: google.cloud.irm.v1alpha2.IArtifact[];

                    /**
                     * Creates a new EscalateIncidentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EscalateIncidentRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IEscalateIncidentRequest): google.cloud.irm.v1alpha2.EscalateIncidentRequest;

                    /**
                     * Encodes the specified EscalateIncidentRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.EscalateIncidentRequest.verify|verify} messages.
                     * @param message EscalateIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IEscalateIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EscalateIncidentRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.EscalateIncidentRequest.verify|verify} messages.
                     * @param message EscalateIncidentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IEscalateIncidentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EscalateIncidentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EscalateIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.EscalateIncidentRequest;

                    /**
                     * Decodes an EscalateIncidentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EscalateIncidentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.EscalateIncidentRequest;

                    /**
                     * Verifies an EscalateIncidentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EscalateIncidentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EscalateIncidentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.EscalateIncidentRequest;

                    /**
                     * Creates a plain object from an EscalateIncidentRequest message. Also converts values to other types if specified.
                     * @param message EscalateIncidentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.EscalateIncidentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EscalateIncidentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EscalateIncidentResponse. */
                interface IEscalateIncidentResponse {

                    /** EscalateIncidentResponse incident */
                    incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** EscalateIncidentResponse subscriptions */
                    subscriptions?: (google.cloud.irm.v1alpha2.ISubscription[]|null);

                    /** EscalateIncidentResponse tags */
                    tags?: (google.cloud.irm.v1alpha2.ITag[]|null);

                    /** EscalateIncidentResponse roles */
                    roles?: (google.cloud.irm.v1alpha2.IIncidentRole[]|null);

                    /** EscalateIncidentResponse artifacts */
                    artifacts?: (google.cloud.irm.v1alpha2.IArtifact[]|null);
                }

                /** Represents an EscalateIncidentResponse. */
                class EscalateIncidentResponse implements IEscalateIncidentResponse {

                    /**
                     * Constructs a new EscalateIncidentResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IEscalateIncidentResponse);

                    /** EscalateIncidentResponse incident. */
                    public incident?: (google.cloud.irm.v1alpha2.IIncident|null);

                    /** EscalateIncidentResponse subscriptions. */
                    public subscriptions: google.cloud.irm.v1alpha2.ISubscription[];

                    /** EscalateIncidentResponse tags. */
                    public tags: google.cloud.irm.v1alpha2.ITag[];

                    /** EscalateIncidentResponse roles. */
                    public roles: google.cloud.irm.v1alpha2.IIncidentRole[];

                    /** EscalateIncidentResponse artifacts. */
                    public artifacts: google.cloud.irm.v1alpha2.IArtifact[];

                    /**
                     * Creates a new EscalateIncidentResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EscalateIncidentResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IEscalateIncidentResponse): google.cloud.irm.v1alpha2.EscalateIncidentResponse;

                    /**
                     * Encodes the specified EscalateIncidentResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.EscalateIncidentResponse.verify|verify} messages.
                     * @param message EscalateIncidentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IEscalateIncidentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EscalateIncidentResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.EscalateIncidentResponse.verify|verify} messages.
                     * @param message EscalateIncidentResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IEscalateIncidentResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EscalateIncidentResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EscalateIncidentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.EscalateIncidentResponse;

                    /**
                     * Decodes an EscalateIncidentResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EscalateIncidentResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.EscalateIncidentResponse;

                    /**
                     * Verifies an EscalateIncidentResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EscalateIncidentResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EscalateIncidentResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.EscalateIncidentResponse;

                    /**
                     * Creates a plain object from an EscalateIncidentResponse message. Also converts values to other types if specified.
                     * @param message EscalateIncidentResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.EscalateIncidentResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EscalateIncidentResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateArtifactRequest. */
                interface ICreateArtifactRequest {

                    /** CreateArtifactRequest parent */
                    parent?: (string|null);

                    /** CreateArtifactRequest artifact */
                    artifact?: (google.cloud.irm.v1alpha2.IArtifact|null);
                }

                /** Represents a CreateArtifactRequest. */
                class CreateArtifactRequest implements ICreateArtifactRequest {

                    /**
                     * Constructs a new CreateArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateArtifactRequest);

                    /** CreateArtifactRequest parent. */
                    public parent: string;

                    /** CreateArtifactRequest artifact. */
                    public artifact?: (google.cloud.irm.v1alpha2.IArtifact|null);

                    /**
                     * Creates a new CreateArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateArtifactRequest): google.cloud.irm.v1alpha2.CreateArtifactRequest;

                    /**
                     * Encodes the specified CreateArtifactRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateArtifactRequest.verify|verify} messages.
                     * @param message CreateArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateArtifactRequest.verify|verify} messages.
                     * @param message CreateArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateArtifactRequest;

                    /**
                     * Decodes a CreateArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateArtifactRequest;

                    /**
                     * Verifies a CreateArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateArtifactRequest;

                    /**
                     * Creates a plain object from a CreateArtifactRequest message. Also converts values to other types if specified.
                     * @param message CreateArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListArtifactsRequest. */
                interface IListArtifactsRequest {

                    /** ListArtifactsRequest parent */
                    parent?: (string|null);

                    /** ListArtifactsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListArtifactsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListArtifactsRequest. */
                class ListArtifactsRequest implements IListArtifactsRequest {

                    /**
                     * Constructs a new ListArtifactsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListArtifactsRequest);

                    /** ListArtifactsRequest parent. */
                    public parent: string;

                    /** ListArtifactsRequest pageSize. */
                    public pageSize: number;

                    /** ListArtifactsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListArtifactsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListArtifactsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListArtifactsRequest): google.cloud.irm.v1alpha2.ListArtifactsRequest;

                    /**
                     * Encodes the specified ListArtifactsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListArtifactsRequest.verify|verify} messages.
                     * @param message ListArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListArtifactsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListArtifactsRequest.verify|verify} messages.
                     * @param message ListArtifactsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListArtifactsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListArtifactsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListArtifactsRequest;

                    /**
                     * Decodes a ListArtifactsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListArtifactsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListArtifactsRequest;

                    /**
                     * Verifies a ListArtifactsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListArtifactsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListArtifactsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListArtifactsRequest;

                    /**
                     * Creates a plain object from a ListArtifactsRequest message. Also converts values to other types if specified.
                     * @param message ListArtifactsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListArtifactsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListArtifactsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListArtifactsResponse. */
                interface IListArtifactsResponse {

                    /** ListArtifactsResponse artifacts */
                    artifacts?: (google.cloud.irm.v1alpha2.IArtifact[]|null);

                    /** ListArtifactsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListArtifactsResponse. */
                class ListArtifactsResponse implements IListArtifactsResponse {

                    /**
                     * Constructs a new ListArtifactsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListArtifactsResponse);

                    /** ListArtifactsResponse artifacts. */
                    public artifacts: google.cloud.irm.v1alpha2.IArtifact[];

                    /** ListArtifactsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListArtifactsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListArtifactsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListArtifactsResponse): google.cloud.irm.v1alpha2.ListArtifactsResponse;

                    /**
                     * Encodes the specified ListArtifactsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListArtifactsResponse.verify|verify} messages.
                     * @param message ListArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListArtifactsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListArtifactsResponse.verify|verify} messages.
                     * @param message ListArtifactsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListArtifactsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListArtifactsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListArtifactsResponse;

                    /**
                     * Decodes a ListArtifactsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListArtifactsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListArtifactsResponse;

                    /**
                     * Verifies a ListArtifactsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListArtifactsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListArtifactsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListArtifactsResponse;

                    /**
                     * Creates a plain object from a ListArtifactsResponse message. Also converts values to other types if specified.
                     * @param message ListArtifactsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListArtifactsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListArtifactsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateArtifactRequest. */
                interface IUpdateArtifactRequest {

                    /** UpdateArtifactRequest artifact */
                    artifact?: (google.cloud.irm.v1alpha2.IArtifact|null);

                    /** UpdateArtifactRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateArtifactRequest. */
                class UpdateArtifactRequest implements IUpdateArtifactRequest {

                    /**
                     * Constructs a new UpdateArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IUpdateArtifactRequest);

                    /** UpdateArtifactRequest artifact. */
                    public artifact?: (google.cloud.irm.v1alpha2.IArtifact|null);

                    /** UpdateArtifactRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IUpdateArtifactRequest): google.cloud.irm.v1alpha2.UpdateArtifactRequest;

                    /**
                     * Encodes the specified UpdateArtifactRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateArtifactRequest.verify|verify} messages.
                     * @param message UpdateArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IUpdateArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateArtifactRequest.verify|verify} messages.
                     * @param message UpdateArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IUpdateArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.UpdateArtifactRequest;

                    /**
                     * Decodes an UpdateArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.UpdateArtifactRequest;

                    /**
                     * Verifies an UpdateArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.UpdateArtifactRequest;

                    /**
                     * Creates a plain object from an UpdateArtifactRequest message. Also converts values to other types if specified.
                     * @param message UpdateArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.UpdateArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteArtifactRequest. */
                interface IDeleteArtifactRequest {

                    /** DeleteArtifactRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteArtifactRequest. */
                class DeleteArtifactRequest implements IDeleteArtifactRequest {

                    /**
                     * Constructs a new DeleteArtifactRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IDeleteArtifactRequest);

                    /** DeleteArtifactRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteArtifactRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteArtifactRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IDeleteArtifactRequest): google.cloud.irm.v1alpha2.DeleteArtifactRequest;

                    /**
                     * Encodes the specified DeleteArtifactRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteArtifactRequest.verify|verify} messages.
                     * @param message DeleteArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IDeleteArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteArtifactRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteArtifactRequest.verify|verify} messages.
                     * @param message DeleteArtifactRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IDeleteArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteArtifactRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.DeleteArtifactRequest;

                    /**
                     * Decodes a DeleteArtifactRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteArtifactRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.DeleteArtifactRequest;

                    /**
                     * Verifies a DeleteArtifactRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteArtifactRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteArtifactRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.DeleteArtifactRequest;

                    /**
                     * Creates a plain object from a DeleteArtifactRequest message. Also converts values to other types if specified.
                     * @param message DeleteArtifactRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.DeleteArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteArtifactRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SendShiftHandoffRequest. */
                interface ISendShiftHandoffRequest {

                    /** SendShiftHandoffRequest parent */
                    parent?: (string|null);

                    /** SendShiftHandoffRequest recipients */
                    recipients?: (string[]|null);

                    /** SendShiftHandoffRequest cc */
                    cc?: (string[]|null);

                    /** SendShiftHandoffRequest subject */
                    subject?: (string|null);

                    /** SendShiftHandoffRequest notesContentType */
                    notesContentType?: (string|null);

                    /** SendShiftHandoffRequest notesContent */
                    notesContent?: (string|null);

                    /** SendShiftHandoffRequest incidents */
                    incidents?: (google.cloud.irm.v1alpha2.SendShiftHandoffRequest.IIncident[]|null);

                    /** SendShiftHandoffRequest previewOnly */
                    previewOnly?: (boolean|null);
                }

                /** Represents a SendShiftHandoffRequest. */
                class SendShiftHandoffRequest implements ISendShiftHandoffRequest {

                    /**
                     * Constructs a new SendShiftHandoffRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISendShiftHandoffRequest);

                    /** SendShiftHandoffRequest parent. */
                    public parent: string;

                    /** SendShiftHandoffRequest recipients. */
                    public recipients: string[];

                    /** SendShiftHandoffRequest cc. */
                    public cc: string[];

                    /** SendShiftHandoffRequest subject. */
                    public subject: string;

                    /** SendShiftHandoffRequest notesContentType. */
                    public notesContentType: string;

                    /** SendShiftHandoffRequest notesContent. */
                    public notesContent: string;

                    /** SendShiftHandoffRequest incidents. */
                    public incidents: google.cloud.irm.v1alpha2.SendShiftHandoffRequest.IIncident[];

                    /** SendShiftHandoffRequest previewOnly. */
                    public previewOnly: boolean;

                    /**
                     * Creates a new SendShiftHandoffRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SendShiftHandoffRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISendShiftHandoffRequest): google.cloud.irm.v1alpha2.SendShiftHandoffRequest;

                    /**
                     * Encodes the specified SendShiftHandoffRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.SendShiftHandoffRequest.verify|verify} messages.
                     * @param message SendShiftHandoffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISendShiftHandoffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SendShiftHandoffRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SendShiftHandoffRequest.verify|verify} messages.
                     * @param message SendShiftHandoffRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISendShiftHandoffRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SendShiftHandoffRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SendShiftHandoffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SendShiftHandoffRequest;

                    /**
                     * Decodes a SendShiftHandoffRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SendShiftHandoffRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SendShiftHandoffRequest;

                    /**
                     * Verifies a SendShiftHandoffRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SendShiftHandoffRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SendShiftHandoffRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SendShiftHandoffRequest;

                    /**
                     * Creates a plain object from a SendShiftHandoffRequest message. Also converts values to other types if specified.
                     * @param message SendShiftHandoffRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SendShiftHandoffRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SendShiftHandoffRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SendShiftHandoffRequest {

                    /** Properties of an Incident. */
                    interface IIncident {

                        /** Incident name */
                        name?: (string|null);
                    }

                    /** Represents an Incident. */
                    class Incident implements IIncident {

                        /**
                         * Constructs a new Incident.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.irm.v1alpha2.SendShiftHandoffRequest.IIncident);

                        /** Incident name. */
                        public name: string;

                        /**
                         * Creates a new Incident instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Incident instance
                         */
                        public static create(properties?: google.cloud.irm.v1alpha2.SendShiftHandoffRequest.IIncident): google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident;

                        /**
                         * Encodes the specified Incident message. Does not implicitly {@link google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.verify|verify} messages.
                         * @param message Incident message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.irm.v1alpha2.SendShiftHandoffRequest.IIncident, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Incident message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident.verify|verify} messages.
                         * @param message Incident message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.irm.v1alpha2.SendShiftHandoffRequest.IIncident, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Incident message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Incident
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident;

                        /**
                         * Decodes an Incident message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Incident
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident;

                        /**
                         * Verifies an Incident message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Incident message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Incident
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident;

                        /**
                         * Creates a plain object from an Incident message. Also converts values to other types if specified.
                         * @param message Incident
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.irm.v1alpha2.SendShiftHandoffRequest.Incident, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Incident to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SendShiftHandoffResponse. */
                interface ISendShiftHandoffResponse {

                    /** SendShiftHandoffResponse contentType */
                    contentType?: (string|null);

                    /** SendShiftHandoffResponse content */
                    content?: (string|null);
                }

                /** Represents a SendShiftHandoffResponse. */
                class SendShiftHandoffResponse implements ISendShiftHandoffResponse {

                    /**
                     * Constructs a new SendShiftHandoffResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ISendShiftHandoffResponse);

                    /** SendShiftHandoffResponse contentType. */
                    public contentType: string;

                    /** SendShiftHandoffResponse content. */
                    public content: string;

                    /**
                     * Creates a new SendShiftHandoffResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SendShiftHandoffResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ISendShiftHandoffResponse): google.cloud.irm.v1alpha2.SendShiftHandoffResponse;

                    /**
                     * Encodes the specified SendShiftHandoffResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.SendShiftHandoffResponse.verify|verify} messages.
                     * @param message SendShiftHandoffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ISendShiftHandoffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SendShiftHandoffResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.SendShiftHandoffResponse.verify|verify} messages.
                     * @param message SendShiftHandoffResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ISendShiftHandoffResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SendShiftHandoffResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SendShiftHandoffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.SendShiftHandoffResponse;

                    /**
                     * Decodes a SendShiftHandoffResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SendShiftHandoffResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.SendShiftHandoffResponse;

                    /**
                     * Verifies a SendShiftHandoffResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SendShiftHandoffResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SendShiftHandoffResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.SendShiftHandoffResponse;

                    /**
                     * Creates a plain object from a SendShiftHandoffResponse message. Also converts values to other types if specified.
                     * @param message SendShiftHandoffResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.SendShiftHandoffResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SendShiftHandoffResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateSubscriptionRequest. */
                interface ICreateSubscriptionRequest {

                    /** CreateSubscriptionRequest parent */
                    parent?: (string|null);

                    /** CreateSubscriptionRequest subscription */
                    subscription?: (google.cloud.irm.v1alpha2.ISubscription|null);
                }

                /** Represents a CreateSubscriptionRequest. */
                class CreateSubscriptionRequest implements ICreateSubscriptionRequest {

                    /**
                     * Constructs a new CreateSubscriptionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateSubscriptionRequest);

                    /** CreateSubscriptionRequest parent. */
                    public parent: string;

                    /** CreateSubscriptionRequest subscription. */
                    public subscription?: (google.cloud.irm.v1alpha2.ISubscription|null);

                    /**
                     * Creates a new CreateSubscriptionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSubscriptionRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateSubscriptionRequest): google.cloud.irm.v1alpha2.CreateSubscriptionRequest;

                    /**
                     * Encodes the specified CreateSubscriptionRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateSubscriptionRequest.verify|verify} messages.
                     * @param message CreateSubscriptionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateSubscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSubscriptionRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateSubscriptionRequest.verify|verify} messages.
                     * @param message CreateSubscriptionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateSubscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSubscriptionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSubscriptionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateSubscriptionRequest;

                    /**
                     * Decodes a CreateSubscriptionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSubscriptionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateSubscriptionRequest;

                    /**
                     * Verifies a CreateSubscriptionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSubscriptionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSubscriptionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateSubscriptionRequest;

                    /**
                     * Creates a plain object from a CreateSubscriptionRequest message. Also converts values to other types if specified.
                     * @param message CreateSubscriptionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateSubscriptionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSubscriptionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSubscriptionRequest. */
                interface IUpdateSubscriptionRequest {

                    /** UpdateSubscriptionRequest subscription */
                    subscription?: (google.cloud.irm.v1alpha2.ISubscription|null);

                    /** UpdateSubscriptionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSubscriptionRequest. */
                class UpdateSubscriptionRequest implements IUpdateSubscriptionRequest {

                    /**
                     * Constructs a new UpdateSubscriptionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IUpdateSubscriptionRequest);

                    /** UpdateSubscriptionRequest subscription. */
                    public subscription?: (google.cloud.irm.v1alpha2.ISubscription|null);

                    /** UpdateSubscriptionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSubscriptionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSubscriptionRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IUpdateSubscriptionRequest): google.cloud.irm.v1alpha2.UpdateSubscriptionRequest;

                    /**
                     * Encodes the specified UpdateSubscriptionRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.verify|verify} messages.
                     * @param message UpdateSubscriptionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IUpdateSubscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSubscriptionRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.UpdateSubscriptionRequest.verify|verify} messages.
                     * @param message UpdateSubscriptionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IUpdateSubscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSubscriptionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSubscriptionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.UpdateSubscriptionRequest;

                    /**
                     * Decodes an UpdateSubscriptionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSubscriptionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.UpdateSubscriptionRequest;

                    /**
                     * Verifies an UpdateSubscriptionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSubscriptionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSubscriptionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.UpdateSubscriptionRequest;

                    /**
                     * Creates a plain object from an UpdateSubscriptionRequest message. Also converts values to other types if specified.
                     * @param message UpdateSubscriptionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.UpdateSubscriptionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSubscriptionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSubscriptionsRequest. */
                interface IListSubscriptionsRequest {

                    /** ListSubscriptionsRequest parent */
                    parent?: (string|null);

                    /** ListSubscriptionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListSubscriptionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListSubscriptionsRequest. */
                class ListSubscriptionsRequest implements IListSubscriptionsRequest {

                    /**
                     * Constructs a new ListSubscriptionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListSubscriptionsRequest);

                    /** ListSubscriptionsRequest parent. */
                    public parent: string;

                    /** ListSubscriptionsRequest pageSize. */
                    public pageSize: number;

                    /** ListSubscriptionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListSubscriptionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubscriptionsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListSubscriptionsRequest): google.cloud.irm.v1alpha2.ListSubscriptionsRequest;

                    /**
                     * Encodes the specified ListSubscriptionsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListSubscriptionsRequest.verify|verify} messages.
                     * @param message ListSubscriptionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListSubscriptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubscriptionsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListSubscriptionsRequest.verify|verify} messages.
                     * @param message ListSubscriptionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListSubscriptionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubscriptionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubscriptionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListSubscriptionsRequest;

                    /**
                     * Decodes a ListSubscriptionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubscriptionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListSubscriptionsRequest;

                    /**
                     * Verifies a ListSubscriptionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubscriptionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubscriptionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListSubscriptionsRequest;

                    /**
                     * Creates a plain object from a ListSubscriptionsRequest message. Also converts values to other types if specified.
                     * @param message ListSubscriptionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListSubscriptionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubscriptionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSubscriptionsResponse. */
                interface IListSubscriptionsResponse {

                    /** ListSubscriptionsResponse subscriptions */
                    subscriptions?: (google.cloud.irm.v1alpha2.ISubscription[]|null);

                    /** ListSubscriptionsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSubscriptionsResponse. */
                class ListSubscriptionsResponse implements IListSubscriptionsResponse {

                    /**
                     * Constructs a new ListSubscriptionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListSubscriptionsResponse);

                    /** ListSubscriptionsResponse subscriptions. */
                    public subscriptions: google.cloud.irm.v1alpha2.ISubscription[];

                    /** ListSubscriptionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSubscriptionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSubscriptionsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListSubscriptionsResponse): google.cloud.irm.v1alpha2.ListSubscriptionsResponse;

                    /**
                     * Encodes the specified ListSubscriptionsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListSubscriptionsResponse.verify|verify} messages.
                     * @param message ListSubscriptionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListSubscriptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSubscriptionsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListSubscriptionsResponse.verify|verify} messages.
                     * @param message ListSubscriptionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListSubscriptionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSubscriptionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSubscriptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListSubscriptionsResponse;

                    /**
                     * Decodes a ListSubscriptionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSubscriptionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListSubscriptionsResponse;

                    /**
                     * Verifies a ListSubscriptionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSubscriptionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSubscriptionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListSubscriptionsResponse;

                    /**
                     * Creates a plain object from a ListSubscriptionsResponse message. Also converts values to other types if specified.
                     * @param message ListSubscriptionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListSubscriptionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSubscriptionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteSubscriptionRequest. */
                interface IDeleteSubscriptionRequest {

                    /** DeleteSubscriptionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteSubscriptionRequest. */
                class DeleteSubscriptionRequest implements IDeleteSubscriptionRequest {

                    /**
                     * Constructs a new DeleteSubscriptionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IDeleteSubscriptionRequest);

                    /** DeleteSubscriptionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteSubscriptionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteSubscriptionRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IDeleteSubscriptionRequest): google.cloud.irm.v1alpha2.DeleteSubscriptionRequest;

                    /**
                     * Encodes the specified DeleteSubscriptionRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.verify|verify} messages.
                     * @param message DeleteSubscriptionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IDeleteSubscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteSubscriptionRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteSubscriptionRequest.verify|verify} messages.
                     * @param message DeleteSubscriptionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IDeleteSubscriptionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteSubscriptionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteSubscriptionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.DeleteSubscriptionRequest;

                    /**
                     * Decodes a DeleteSubscriptionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteSubscriptionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.DeleteSubscriptionRequest;

                    /**
                     * Verifies a DeleteSubscriptionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteSubscriptionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteSubscriptionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.DeleteSubscriptionRequest;

                    /**
                     * Creates a plain object from a DeleteSubscriptionRequest message. Also converts values to other types if specified.
                     * @param message DeleteSubscriptionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.DeleteSubscriptionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteSubscriptionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateIncidentRoleAssignmentRequest. */
                interface ICreateIncidentRoleAssignmentRequest {

                    /** CreateIncidentRoleAssignmentRequest parent */
                    parent?: (string|null);

                    /** CreateIncidentRoleAssignmentRequest incidentRoleAssignment */
                    incidentRoleAssignment?: (google.cloud.irm.v1alpha2.IIncidentRoleAssignment|null);
                }

                /** Represents a CreateIncidentRoleAssignmentRequest. */
                class CreateIncidentRoleAssignmentRequest implements ICreateIncidentRoleAssignmentRequest {

                    /**
                     * Constructs a new CreateIncidentRoleAssignmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICreateIncidentRoleAssignmentRequest);

                    /** CreateIncidentRoleAssignmentRequest parent. */
                    public parent: string;

                    /** CreateIncidentRoleAssignmentRequest incidentRoleAssignment. */
                    public incidentRoleAssignment?: (google.cloud.irm.v1alpha2.IIncidentRoleAssignment|null);

                    /**
                     * Creates a new CreateIncidentRoleAssignmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateIncidentRoleAssignmentRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICreateIncidentRoleAssignmentRequest): google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest;

                    /**
                     * Encodes the specified CreateIncidentRoleAssignmentRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.verify|verify} messages.
                     * @param message CreateIncidentRoleAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICreateIncidentRoleAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateIncidentRoleAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest.verify|verify} messages.
                     * @param message CreateIncidentRoleAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICreateIncidentRoleAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateIncidentRoleAssignmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateIncidentRoleAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest;

                    /**
                     * Decodes a CreateIncidentRoleAssignmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateIncidentRoleAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest;

                    /**
                     * Verifies a CreateIncidentRoleAssignmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateIncidentRoleAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateIncidentRoleAssignmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest;

                    /**
                     * Creates a plain object from a CreateIncidentRoleAssignmentRequest message. Also converts values to other types if specified.
                     * @param message CreateIncidentRoleAssignmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateIncidentRoleAssignmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteIncidentRoleAssignmentRequest. */
                interface IDeleteIncidentRoleAssignmentRequest {

                    /** DeleteIncidentRoleAssignmentRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteIncidentRoleAssignmentRequest. */
                class DeleteIncidentRoleAssignmentRequest implements IDeleteIncidentRoleAssignmentRequest {

                    /**
                     * Constructs a new DeleteIncidentRoleAssignmentRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IDeleteIncidentRoleAssignmentRequest);

                    /** DeleteIncidentRoleAssignmentRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteIncidentRoleAssignmentRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteIncidentRoleAssignmentRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IDeleteIncidentRoleAssignmentRequest): google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest;

                    /**
                     * Encodes the specified DeleteIncidentRoleAssignmentRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.verify|verify} messages.
                     * @param message DeleteIncidentRoleAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IDeleteIncidentRoleAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteIncidentRoleAssignmentRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest.verify|verify} messages.
                     * @param message DeleteIncidentRoleAssignmentRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IDeleteIncidentRoleAssignmentRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteIncidentRoleAssignmentRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteIncidentRoleAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest;

                    /**
                     * Decodes a DeleteIncidentRoleAssignmentRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteIncidentRoleAssignmentRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest;

                    /**
                     * Verifies a DeleteIncidentRoleAssignmentRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteIncidentRoleAssignmentRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteIncidentRoleAssignmentRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest;

                    /**
                     * Creates a plain object from a DeleteIncidentRoleAssignmentRequest message. Also converts values to other types if specified.
                     * @param message DeleteIncidentRoleAssignmentRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteIncidentRoleAssignmentRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIncidentRoleAssignmentsRequest. */
                interface IListIncidentRoleAssignmentsRequest {

                    /** ListIncidentRoleAssignmentsRequest parent */
                    parent?: (string|null);

                    /** ListIncidentRoleAssignmentsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListIncidentRoleAssignmentsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListIncidentRoleAssignmentsRequest. */
                class ListIncidentRoleAssignmentsRequest implements IListIncidentRoleAssignmentsRequest {

                    /**
                     * Constructs a new ListIncidentRoleAssignmentsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsRequest);

                    /** ListIncidentRoleAssignmentsRequest parent. */
                    public parent: string;

                    /** ListIncidentRoleAssignmentsRequest pageSize. */
                    public pageSize: number;

                    /** ListIncidentRoleAssignmentsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListIncidentRoleAssignmentsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIncidentRoleAssignmentsRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsRequest): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest;

                    /**
                     * Encodes the specified ListIncidentRoleAssignmentsRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.verify|verify} messages.
                     * @param message ListIncidentRoleAssignmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIncidentRoleAssignmentsRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest.verify|verify} messages.
                     * @param message ListIncidentRoleAssignmentsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIncidentRoleAssignmentsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIncidentRoleAssignmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest;

                    /**
                     * Decodes a ListIncidentRoleAssignmentsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIncidentRoleAssignmentsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest;

                    /**
                     * Verifies a ListIncidentRoleAssignmentsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIncidentRoleAssignmentsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIncidentRoleAssignmentsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest;

                    /**
                     * Creates a plain object from a ListIncidentRoleAssignmentsRequest message. Also converts values to other types if specified.
                     * @param message ListIncidentRoleAssignmentsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIncidentRoleAssignmentsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListIncidentRoleAssignmentsResponse. */
                interface IListIncidentRoleAssignmentsResponse {

                    /** ListIncidentRoleAssignmentsResponse incidentRoleAssignments */
                    incidentRoleAssignments?: (google.cloud.irm.v1alpha2.IIncidentRoleAssignment[]|null);

                    /** ListIncidentRoleAssignmentsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListIncidentRoleAssignmentsResponse. */
                class ListIncidentRoleAssignmentsResponse implements IListIncidentRoleAssignmentsResponse {

                    /**
                     * Constructs a new ListIncidentRoleAssignmentsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsResponse);

                    /** ListIncidentRoleAssignmentsResponse incidentRoleAssignments. */
                    public incidentRoleAssignments: google.cloud.irm.v1alpha2.IIncidentRoleAssignment[];

                    /** ListIncidentRoleAssignmentsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListIncidentRoleAssignmentsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListIncidentRoleAssignmentsResponse instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsResponse): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse;

                    /**
                     * Encodes the specified ListIncidentRoleAssignmentsResponse message. Does not implicitly {@link google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.verify|verify} messages.
                     * @param message ListIncidentRoleAssignmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListIncidentRoleAssignmentsResponse message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse.verify|verify} messages.
                     * @param message ListIncidentRoleAssignmentsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IListIncidentRoleAssignmentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListIncidentRoleAssignmentsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListIncidentRoleAssignmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse;

                    /**
                     * Decodes a ListIncidentRoleAssignmentsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListIncidentRoleAssignmentsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse;

                    /**
                     * Verifies a ListIncidentRoleAssignmentsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListIncidentRoleAssignmentsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListIncidentRoleAssignmentsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse;

                    /**
                     * Creates a plain object from a ListIncidentRoleAssignmentsResponse message. Also converts values to other types if specified.
                     * @param message ListIncidentRoleAssignmentsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListIncidentRoleAssignmentsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RequestIncidentRoleHandoverRequest. */
                interface IRequestIncidentRoleHandoverRequest {

                    /** RequestIncidentRoleHandoverRequest name */
                    name?: (string|null);

                    /** RequestIncidentRoleHandoverRequest newAssignee */
                    newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);
                }

                /** Represents a RequestIncidentRoleHandoverRequest. */
                class RequestIncidentRoleHandoverRequest implements IRequestIncidentRoleHandoverRequest {

                    /**
                     * Constructs a new RequestIncidentRoleHandoverRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IRequestIncidentRoleHandoverRequest);

                    /** RequestIncidentRoleHandoverRequest name. */
                    public name: string;

                    /** RequestIncidentRoleHandoverRequest newAssignee. */
                    public newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /**
                     * Creates a new RequestIncidentRoleHandoverRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RequestIncidentRoleHandoverRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IRequestIncidentRoleHandoverRequest): google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest;

                    /**
                     * Encodes the specified RequestIncidentRoleHandoverRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message RequestIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IRequestIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RequestIncidentRoleHandoverRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message RequestIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IRequestIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RequestIncidentRoleHandoverRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RequestIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest;

                    /**
                     * Decodes a RequestIncidentRoleHandoverRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RequestIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest;

                    /**
                     * Verifies a RequestIncidentRoleHandoverRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RequestIncidentRoleHandoverRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RequestIncidentRoleHandoverRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest;

                    /**
                     * Creates a plain object from a RequestIncidentRoleHandoverRequest message. Also converts values to other types if specified.
                     * @param message RequestIncidentRoleHandoverRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RequestIncidentRoleHandoverRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ConfirmIncidentRoleHandoverRequest. */
                interface IConfirmIncidentRoleHandoverRequest {

                    /** ConfirmIncidentRoleHandoverRequest name */
                    name?: (string|null);

                    /** ConfirmIncidentRoleHandoverRequest newAssignee */
                    newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);
                }

                /** Represents a ConfirmIncidentRoleHandoverRequest. */
                class ConfirmIncidentRoleHandoverRequest implements IConfirmIncidentRoleHandoverRequest {

                    /**
                     * Constructs a new ConfirmIncidentRoleHandoverRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IConfirmIncidentRoleHandoverRequest);

                    /** ConfirmIncidentRoleHandoverRequest name. */
                    public name: string;

                    /** ConfirmIncidentRoleHandoverRequest newAssignee. */
                    public newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /**
                     * Creates a new ConfirmIncidentRoleHandoverRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ConfirmIncidentRoleHandoverRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IConfirmIncidentRoleHandoverRequest): google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest;

                    /**
                     * Encodes the specified ConfirmIncidentRoleHandoverRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message ConfirmIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IConfirmIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ConfirmIncidentRoleHandoverRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message ConfirmIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IConfirmIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ConfirmIncidentRoleHandoverRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ConfirmIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest;

                    /**
                     * Decodes a ConfirmIncidentRoleHandoverRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ConfirmIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest;

                    /**
                     * Verifies a ConfirmIncidentRoleHandoverRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ConfirmIncidentRoleHandoverRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ConfirmIncidentRoleHandoverRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest;

                    /**
                     * Creates a plain object from a ConfirmIncidentRoleHandoverRequest message. Also converts values to other types if specified.
                     * @param message ConfirmIncidentRoleHandoverRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ConfirmIncidentRoleHandoverRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ForceIncidentRoleHandoverRequest. */
                interface IForceIncidentRoleHandoverRequest {

                    /** ForceIncidentRoleHandoverRequest name */
                    name?: (string|null);

                    /** ForceIncidentRoleHandoverRequest newAssignee */
                    newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);
                }

                /** Represents a ForceIncidentRoleHandoverRequest. */
                class ForceIncidentRoleHandoverRequest implements IForceIncidentRoleHandoverRequest {

                    /**
                     * Constructs a new ForceIncidentRoleHandoverRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.IForceIncidentRoleHandoverRequest);

                    /** ForceIncidentRoleHandoverRequest name. */
                    public name: string;

                    /** ForceIncidentRoleHandoverRequest newAssignee. */
                    public newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /**
                     * Creates a new ForceIncidentRoleHandoverRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ForceIncidentRoleHandoverRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.IForceIncidentRoleHandoverRequest): google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest;

                    /**
                     * Encodes the specified ForceIncidentRoleHandoverRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message ForceIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.IForceIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ForceIncidentRoleHandoverRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message ForceIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.IForceIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ForceIncidentRoleHandoverRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ForceIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest;

                    /**
                     * Decodes a ForceIncidentRoleHandoverRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ForceIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest;

                    /**
                     * Verifies a ForceIncidentRoleHandoverRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ForceIncidentRoleHandoverRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ForceIncidentRoleHandoverRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest;

                    /**
                     * Creates a plain object from a ForceIncidentRoleHandoverRequest message. Also converts values to other types if specified.
                     * @param message ForceIncidentRoleHandoverRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ForceIncidentRoleHandoverRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelIncidentRoleHandoverRequest. */
                interface ICancelIncidentRoleHandoverRequest {

                    /** CancelIncidentRoleHandoverRequest name */
                    name?: (string|null);

                    /** CancelIncidentRoleHandoverRequest newAssignee */
                    newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);
                }

                /** Represents a CancelIncidentRoleHandoverRequest. */
                class CancelIncidentRoleHandoverRequest implements ICancelIncidentRoleHandoverRequest {

                    /**
                     * Constructs a new CancelIncidentRoleHandoverRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.irm.v1alpha2.ICancelIncidentRoleHandoverRequest);

                    /** CancelIncidentRoleHandoverRequest name. */
                    public name: string;

                    /** CancelIncidentRoleHandoverRequest newAssignee. */
                    public newAssignee?: (google.cloud.irm.v1alpha2.IUser|null);

                    /**
                     * Creates a new CancelIncidentRoleHandoverRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelIncidentRoleHandoverRequest instance
                     */
                    public static create(properties?: google.cloud.irm.v1alpha2.ICancelIncidentRoleHandoverRequest): google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest;

                    /**
                     * Encodes the specified CancelIncidentRoleHandoverRequest message. Does not implicitly {@link google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message CancelIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.irm.v1alpha2.ICancelIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelIncidentRoleHandoverRequest message, length delimited. Does not implicitly {@link google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest.verify|verify} messages.
                     * @param message CancelIncidentRoleHandoverRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.irm.v1alpha2.ICancelIncidentRoleHandoverRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelIncidentRoleHandoverRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest;

                    /**
                     * Decodes a CancelIncidentRoleHandoverRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelIncidentRoleHandoverRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest;

                    /**
                     * Verifies a CancelIncidentRoleHandoverRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelIncidentRoleHandoverRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelIncidentRoleHandoverRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest;

                    /**
                     * Creates a plain object from a CancelIncidentRoleHandoverRequest message. Also converts values to other types if specified.
                     * @param message CancelIncidentRoleHandoverRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelIncidentRoleHandoverRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
